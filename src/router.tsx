import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { SignInPage } from '@/pages/auth/login-page.tsx'
import { SignUpPage } from '@/pages/auth/registration-page.tsx'
import { Decks } from '@/pages/decks/decks.tsx'
import { useMeQuery } from '@/services/auth/auth-api.ts'

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
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Decks />,
  },
]

function PrivateRoutes() {
  const { data } = useMeQuery()

  console.log(data)
  const isAuthenticated = !!data

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
