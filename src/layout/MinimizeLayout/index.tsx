import { useMediaQuery } from '@mui/material'
import { Outlet, useLocation } from 'react-router-dom'
import { ROUTER } from 'src/constant/pagepath'
import { screenSize } from 'src/constant/theme'
import Banner from 'src/ui-component/Banner'
import Logo from 'src/ui-component/Logo'
import TypoDisplay from 'src/ui-component/Typo/TypoDisplay'
const MinimizeLayout = () => {
  const location = useLocation()

  const isMatchRegister = location.pathname.includes(ROUTER.Authenticate.register.path)
  const isMatchMd = useMediaQuery(`(max-width:${screenSize.md}px)`)

  return (
    <div className='flex relative min-h-screen'>
      <Logo className='absolute top-5 left-5 m-5' />
      <div className={`flex flex-col items-center justify-center gap-20 flex-grow ${isMatchMd && 'hidden'}`}>
        <TypoDisplay className='max-w-[480px] xl:text-display-xl text-center' text={isMatchRegister ? 'Manage the job more effectively with Minimal' : 'Hi, Welcome back'} />
        <Banner />
        <TypoDisplay text='Hi, Welcome back' />
      </div>
      <div className='max-w-[480px] flex flex-col mx-auto pt-[160px] px-[64px] pb-0'>
        <Outlet />
      </div>
    </div>
  )
}

export default MinimizeLayout
