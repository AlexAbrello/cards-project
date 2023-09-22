import { baseApi } from '@/services/base-api.ts'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<MeResponse | null | { success: boolean }, void>({
        async queryFn(_name, _api, _extraOptions, baseQuery) {
          const result = await baseQuery({
            url: `v1/auth/me`,
            method: 'GET',
          })

          if (result.error) {
            // but refetch on another error
            return { data: { success: false } }
          }

          return { data: result.data } as { data: MeResponse }
        },
        providesTags: ['Me'],
      }),
      login: builder.mutation<LoginResponse, LoginRequest>({
        query: data => {
          return {
            url: `v1/auth/login`,
            method: 'POST',
            body: data,
          }
        },
        invalidatesTags: ['Me'],
      }),
      registration: builder.mutation<RegistrationResponse, RegistrationRequest>({
        query: ({ email, password }) => {
          return {
            url: 'v1/auth/sign-up',
            method: 'POST',
            body: { email, password },
          }
        },
      }),
    }
  },
})

export const { useLoginMutation, useMeQuery, useRegistrationMutation } = authApi

type MeResponse = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

type LoginResponse = {
  accessToken: string
}

type LoginRequest = {
  password: string
  email: string
  rememberMe: boolean
}

type RegistrationResponse = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

type RegistrationRequest = {
  html: string
  name: string
  password: string
  email: string
  subject: string
  sendConfirmationEmail: boolean
}
