import { Drawer } from '@mui/material'
import { useState } from 'react'
import { RiContrastFill, RiSunFill } from 'react-icons/ri'
import ButtonIcon from '../Button/ButtonIcon'
import ButtonNormal from '../Button/ButtonNormal'
import { Gear } from '../Icons'
import TypoDisplay from '../Typo/TypoDisplay'
import TypoText from '../Typo/TypoText'
import { WiNightAltCloudy } from 'react-icons/wi'
import { CgEditContrast } from 'react-icons/cg'
import { LuLayoutPanelLeft } from 'react-icons/lu'

const Setting = () => {
  const [state, setState] = useState<boolean | undefined>(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState(open)
  }

  return (
    <>
      <ButtonIcon onClick={toggleDrawer(true)} className='text-display-sm' Icon={Gear} />
      <Drawer className='relative' anchor='right' open={state} onClose={toggleDrawer(false)}>
        <div className='pt-5 pr-2 pb-5 pl-4 min-h-[68px] '>
          <TypoDisplay text='Settings' className='text-[18px]' variant='h6' />
        </div>

        <div className='max-h-full flex p-6 gap-6 flex-col '>
          <div>
            <TypoText text='Mode' />
            <div className='flex gap-6'>
              <ButtonNormal
                variant='outlined'
                size='large'
                className='w-28 h-20 text-textPrimary shadow-sm border-gray-50'
              >
                <RiSunFill size={26} className='text-primary-700' />
              </ButtonNormal>
              <ButtonNormal
                variant='outlined'
                size='large'
                className='w-28 h-20 text-textPrimary shadow-sm border-gray-50 '
              >
                <WiNightAltCloudy size={26} />
              </ButtonNormal>
            </div>
          </div>

          <div>
            <TypoText text='Mode' />
            <div className='flex gap-6'>
              <ButtonNormal
                variant='outlined'
                size='large'
                className='w-28 h-20 text-textPrimary shadow-sm border-gray-50'
              >
                <RiContrastFill size={26} className='text-primary-700' />
              </ButtonNormal>
              <ButtonNormal
                variant='outlined'
                size='large'
                className='w-28 h-20 text-textPrimary shadow-sm border-gray-50 '
              >
                <CgEditContrast size={26} />
              </ButtonNormal>
            </div>
          </div>
          <div>
            <TypoText text='Direction' />
            <div className='flex gap-6'>
              <ButtonNormal
                variant='outlined'
                size='large'
                className='w-28 h-20 text-textPrimary shadow-sm border-gray-50'
              >
                <LuLayoutPanelLeft size={26} className='text-primary-700' />
              </ButtonNormal>
              <ButtonNormal
                variant='outlined'
                size='large'
                className='w-28 h-20 text-textPrimary shadow-sm border-gray-50 '
              >
                <LuLayoutPanelLeft className='rotate-180' size={26} />
              </ButtonNormal>
            </div>
          </div>
          <div>
            <TypoText text='Presets' />
            <div className='gap-6 grid grid-cols-3'>
              {Array.from({ length: 6 }).map(() => {
                return (
                  <ButtonNormal
                    variant='outlined'
                    size='large'
                    className='w-16 h-14 text-textPrimary shadow-sm border-gray-50 '
                  >
                    <div className='w-3 h-3 bg-primary-600 rounded-full '></div>
                  </ButtonNormal>
                )
              })}
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <ButtonNormal className='h-12' text='View All' variant='text' size='large' />
        </div>
      </Drawer>
    </>
  )
}

export default Setting
