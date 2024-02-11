import { Outlet } from 'react-router-dom'
import Header from 'src/ui-component/Header'
import SideBar from './SideBar'

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className='flex'>
        <SideBar/>
        <div>
          main layout
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
