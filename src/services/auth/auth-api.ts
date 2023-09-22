import { baseApi } from '@/services/base-api.ts'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<any, void>({
        query: () => {
          return {
            url: 'v1/auth/me',
            method: 'GET',
          }
        },
      }),
      login: builder.mutation<any, any>({
        query: args => {
          return {
            url: `v1/auth/login`,
            method: 'POST',
            params: args,
          }
        },
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
