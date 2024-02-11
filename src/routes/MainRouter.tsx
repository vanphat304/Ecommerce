import type { RouteObject } from 'react-router-dom'
import { ROUTER } from 'src/constant/pagepath'
import MainLayout from 'src/layout/MainLayout'
import DefaultDashboard from 'src/views/dashboard/Default'

const MainRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: ROUTER.Main.dashboard.path,
      element: <DefaultDashboard />
    }
  ]
}

export default MainRoutes
