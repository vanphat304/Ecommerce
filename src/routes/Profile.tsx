import type { RouteObject } from 'react-router-dom'
import Profile from 'src/views/pages/Profile'

const ProfileRouter: RouteObject = {
  path: '/my-cv',
  element: <Profile />
}

export default ProfileRouter
