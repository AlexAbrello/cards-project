import { baseApi } from '@/services/base-api.ts'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksResponse, void>({
        query: () => `v1/decks`,
      }),
    }
  },
})

export const { useGetDecksQuery } = decksApi

export type DecksResponse = {
  maxCardsCount: number
  pagination: Pagination
  items: Deck[]
}
export type Pagination = {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}
export type Author = {
  id: string
  name: string
}
export type Deck = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string | null
  rating: number
  isDeleted: boolean
  isBlocked: boolean
  created: string
  updated: string
  cardsCount: number
  author: Author
}
