import type { RouteObject } from 'react-router-dom'
import { ROUTER } from 'src/constant/pagepath'
import MinimizeLayout from 'src/layout/MinimizeLayout'
import AuthLogin from 'src/views/pages/authentication/auth-form/AuthLogin'
import AuthRegister from 'src/views/pages/authentication/auth-form/AuthRegister'

const AuthenticationRoutes: RouteObject = {
  path: '/',
  element: <MinimizeLayout />,
  children: [
    {
      path: ROUTER.Authenticate.login.path,
      element: <AuthLogin />
    },
    {
      path: ROUTER.Authenticate.register.path,
      element: <AuthRegister />
    }
  ]
}

export default AuthenticationRoutes
