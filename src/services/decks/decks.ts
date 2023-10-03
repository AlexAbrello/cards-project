import { baseApi } from '@/services/base-api.ts'
import { RootState } from '@/services/store.ts'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksResponse, GetDecksArgs>({
        query: args => {
          return {
            url: `v1/decks`,
            method: 'GET',
            params: args,
          }
        },
        providesTags: ['Decks'],
      }),
      createDeck: builder.mutation<Deck, CreateDeckRequest>({
        query: body => {
          return {
            url: `v1/decks`,
            method: 'POST',
            body,
          }
        },
        async onQueryStarted(_, { dispatch, queryFulfilled, getState }) {
          const state = getState() as RootState

          try {
            const response = await queryFulfilled

            dispatch(
              decksApi.util.updateQueryData(
                'getDecks',
                {
                  currentPage: state.deckSlice.currentPage,
                  itemsPerPage: state.deckSlice.itemsPerPage,
                },
                draft => {
                  draft.items.unshift(response?.data)
                }
              )
            )
          } catch (error) {
            console.log(error)
          }
        },
        invalidatesTags: ['Decks'],
      }),
      deleteDeck: builder.mutation<void, { id: string }>({
        query: data => ({
          url: `v1/decks/${data.id}`,
          method: 'DELETE',
        }),
        async onQueryStarted({ id }, { dispatch, queryFulfilled, getState }) {
          const state = getState() as RootState
          const patchResult = dispatch(
            decksApi.util.updateQueryData(
              'getDecks',
              {
                currentPage: state.deckSlice.currentPage,
                itemsPerPage: state.deckSlice.itemsPerPage,
              },
              draft => {
                draft.items = draft.items.filter(el => el.id !== id)
              }
            )
          )

          try {
            await queryFulfilled
          } catch {
            patchResult.undo()
          }
        },
        invalidatesTags: ['Decks'],
      }),
    }
  },
})

export const { useGetDecksQuery, useCreateDeckMutation, useDeleteDeckMutation } = decksApi

export type CreateDeckRequest = {
  name: string
  isPrivate?: boolean
}

export type GetDecksArgs = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}

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
