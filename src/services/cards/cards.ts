import { baseApi } from '@/services/base-api.ts'
import {
  Card,
  CreateCardArgs,
  DeckCardsResponse,
  GetDeckCardsArgs,
} from '@/services/decks/types.ts'
import { RootState } from '@/services/store.ts'

const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDeckCards: builder.query<DeckCardsResponse, GetDeckCardsArgs>({
        query: ({ id, ...args }) => {
          return {
            url: `v1/decks/${id}/cards`,
            method: 'GET',
            params: { ...args },
          }
        },
        providesTags: ['Decks', 'Cards'],
      }),
      createCard: builder.mutation<Card, CreateCardArgs>({
        query: ({ id, ...args }) => {
          return {
            url: `v1/decks/${id}/cards`,
            method: 'POST',
            body: { ...args },
          }
        },
        async onQueryStarted({ id }, { dispatch, queryFulfilled, getState }) {
          const state = getState() as RootState

          try {
            const response = await queryFulfilled

            dispatch(
              cardsApi.util.updateQueryData(
                'getDeckCards',
                {
                  id,
                  currentPage: state.cardsSlice.currentPage,
                  itemsPerPage: state.cardsSlice.itemsPerPage,
                  question: state.cardsSlice.searchByName,
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
        invalidatesTags: ['Decks', 'Cards'],
      }),
      deleteCard: builder.mutation<void, { id: string }>({
        query: data => {
          return {
            url: `v1/cards/${data.id}`,
            method: 'DELETE',
          }
        },
        async onQueryStarted({ id }, { dispatch, queryFulfilled, getState }) {
          const state = getState() as RootState
          const patchResult = dispatch(
            cardsApi.util.updateQueryData(
              'getDeckCards',
              {
                id: state.cardsSlice.deckId,
                currentPage: state.cardsSlice.currentPage,
                itemsPerPage: state.cardsSlice.itemsPerPage,
                question: state.cardsSlice.searchByName,
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
        invalidatesTags: ['Decks', 'Cards'],
      }),
      editCard: builder.mutation<Card, CreateCardArgs>({
        query: ({ id, ...args }) => {
          return {
            url: `v1/cards/${id}`,
            method: 'PATCH',
            body: { ...args },
          }
        },
        async onQueryStarted({ id, ...args }, { dispatch, queryFulfilled, getState }) {
          const state = getState() as RootState
          const patchResult = dispatch(
            cardsApi.util.updateQueryData(
              'getDeckCards',
              {
                id: state.cardsSlice.deckId,
                currentPage: state.cardsSlice.currentPage,
                itemsPerPage: state.cardsSlice.itemsPerPage,
                question: state.cardsSlice.searchByName,
              },
              draft => {
                draft.items = draft.items.map(el =>
                  el.id === id ? { ...el, question: args.question, answer: args.answer } : el
                )
              }
            )
          )

          try {
            await queryFulfilled
          } catch {
            patchResult.undo()
          }
        },
        invalidatesTags: ['Decks', 'Cards'],
      }),
    }
  },
})

export const {
  useGetDeckCardsQuery,
  useCreateCardMutation,
  useDeleteCardMutation,
  useEditCardMutation,
} = cardsApi
