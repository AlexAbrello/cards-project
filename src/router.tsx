import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { HeaderComponent } from '@/components/ui/header-component/header-component.tsx'
import { Loader } from '@/components/ui/loader'
import { SignInPage } from '@/pages/auth/login-page.tsx'
import { SignUpPage } from '@/pages/auth/registration-page.tsx'
import { Decks } from '@/pages/decks/decks.tsx'
import { MyDeck } from '@/pages/decks/my-deck-page/my-deck-page.tsx'
import { PageNotFound } from '@/pages/not-found/not-found.tsx'
import { useMeQuery } from '@/services/auth/auth-api.ts'
import { authSlice } from '@/services/auth/auth.slice.ts'
import { useAppDispatch } from '@/services/store.ts'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  // {
  //   path: '/forgot-password',
  //   element: <ForgotPassPage />,
  // },
  {
    path: '*',
    element: <PageNotFound />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Decks />,
  },
  {
    path: '/my-deck/:id',
    element: <MyDeck />,
  },
]

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

export const Router = () => {
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <Loader />

  return (
    <>
      <HeaderComponent name={data?.name} />
      <RouterProvider router={router} />
    </>
  )
}
function PrivateRoutes() {
  const { data } = useMeQuery()

  const dispatch = useAppDispatch()
  const setUserId = (id: string) => dispatch(authSlice.actions.setUserId(id))

  const isAuthenticated = data && data?.success !== false

  if (isAuthenticated) {
    setUserId(data.id)
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
