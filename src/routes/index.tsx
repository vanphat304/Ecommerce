import { useRoutes } from 'react-router-dom'
import AuthenticationRoutes from './AuthenticationRoutes'
import MainRoutes from './MainRouter'
import ProfileRouter from './Profile'
export default function ThemeRoutes() {
  return useRoutes([ProfileRouter, MainRoutes, AuthenticationRoutes])
}
