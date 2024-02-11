import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Avatar, Button, ButtonBase, Drawer, Tab } from '@mui/material'
import { useState } from 'react'
import ButtonIcon from '../Button/ButtonIcon'
import ButtonNormal from '../Button/ButtonNormal'
import { Bel, Gear } from '../Icons'
import TypoDisplay from '../Typo/TypoDisplay'
import TypoText from '../Typo/TypoText'

const Notification = () => {
  const [state, setState] = useState<boolean | undefined>(false)

  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

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
      <ButtonIcon onClick={toggleDrawer(true)} className='text-display-sm' countNotification={4} Icon={Bel} />
      <Drawer className='relative' anchor='right' open={state} onClose={toggleDrawer(false)}>
        <div className='pt-5 pr-2 pb-5 pl-4 min-h-[68px] '>
          <TypoDisplay text='Notifications' className='text-[18px]' variant='h6' />
        </div>

        <TabContext value={value}>
          <div className='pr-2 pl-5 border border-solid border-r-0 border-l-0 border-t-gray-50 border-b-gray-50 '>
            <TabList
              onChange={handleChange}
              // TabIndicatorProps={{ style: { background: 'red' } }}
            >
              <Tab
                className='p-0 min-w-[10px] mr-6'
                label={
                  <div className='flex items-center gap-2'>
                    <TypoText className='font-semibold capitalize' text='All' />
                    <span className='h-6 px-[6px] leading-6 bg-textPrimary text-white rounded-md text-xs font-bold '>
                      22
                    </span>
                  </div>
                }
                value='1'
              />
              <Tab
                className='p-0 min-w-[10px] mr-6'
                label={
                  <div className='flex items-center gap-2'>
                    <TypoText className='font-semibold capitalize' text='Unread' />
                    <span
                      className={`h-6 px-[6px] leading-6 ${value !== '2' ? 'bg-blue-100 text-blue-400' : 'text-white bg-blue-300'} rounded-md text-xs font-bold`}
                    >
                      12
                    </span>
                  </div>
                }
                value='2'
              />
              <Tab
                className='p-0 min-w-[10px] mr-6'
                label={
                  <div className='flex items-center gap-2'>
                    <TypoText className='font-semibold capitalize' text='Archived' />
                    <span
                      className={`h-6 px-[6px] leading-6 ${value !== '3' ? 'bg-primary-400 text-primary-700' : 'bg-primary-600 text-white'} rounded-md text-xs font-bold`}
                    >
                      10
                    </span>
                  </div>
                }
                value='3'
              />
              <div className='flex items-center ml-11'>
                <ButtonIcon className='w-5 h-5' Icon={Gear} />
              </div>
            </TabList>
          </div>

          <TabPanel className='p-0 flex-grow h-full overflow-hidden' value='1' >
            <div className='max-h-full overflow-y-scroll' >
              <div className='flex gap-4 hover:bg-gray-extra p-5 cursor-pointer border-dashed border-t-0 border-r-0 border-l-0 border-b-[1px] border-b-gray-50'>
                <Avatar src='https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg' />
                <div>
                  <div className='flex gap-1'>
                    <TypoText className='font-medium text-sm' text='Deja Brady' />
                    <TypoText text=' sent you a friend request' className='text-sm text-[#3f4852] font-normal' />
                  </div>
                  <div className='flex gap-1'>
                    <TypoText text='about 1 hour ago  -' className='text-textSecondary text-xs' />
                    <TypoText text='Communication' className='text-textSecondary text-xs' />
                  </div>
                  <div className='flex gap-2 p-3'>
                    <ButtonNormal text='Accept' size='small' />
                    <ButtonNormal text='Decline' size='small' variant='outlined' />
                  </div>
                </div>
              </div>
              <div className='flex gap-4 hover:bg-gray-extra p-5 cursor-pointer border-dashed border-t-0 border-r-0 border-l-0 border-b-[1px] border-b-gray-50'>
                <Avatar src='https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg' />
                <div>
                  <div className='flex gap-1'>
                    <TypoText className='font-medium text-sm' text='Deja Brady' />
                    <TypoText text=' sent you a friend request' className='text-sm text-[#3f4852] font-normal' />
                  </div>
                  <div className='flex gap-1'>
                    <TypoText text='about 1 hour ago  -' className='text-textSecondary text-xs' />
                    <TypoText text='Communication' className='text-textSecondary text-xs' />
                  </div>
                  <div className='flex gap-2 p-3'>
                    <ButtonNormal text='Accept' size='small' />
                    <ButtonNormal text='Decline' size='small' variant='outlined' />
                  </div>
                </div>
              </div>
              <div className='flex gap-4 hover:bg-gray-extra p-5 cursor-pointer border-dashed border-t-0 border-r-0 border-l-0 border-b-[1px] border-b-gray-50'>
                <Avatar src='https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg' />
                <div>
                  <div className='flex gap-1'>
                    <TypoText className='font-medium text-sm' text='Deja Brady' />
                    <TypoText text=' sent you a friend request' className='text-sm text-[#3f4852] font-normal' />
                  </div>
                  <div className='flex gap-1'>
                    <TypoText text='about 1 hour ago  -' className='text-textSecondary text-xs' />
                    <TypoText text='Communication' className='text-textSecondary text-xs' />
                  </div>
                  <div className='flex gap-2 p-3'>
                    <ButtonNormal text='Accept' size='small' />
                    <ButtonNormal text='Decline' size='small' variant='outlined' />
                  </div>
                </div>
              </div>
              <div className='flex gap-4 hover:bg-gray-extra p-5 cursor-pointer border-dashed border-t-0 border-r-0 border-l-0 border-b-[1px] border-b-gray-50'>
                <Avatar src='https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg' />
                <div>
                  <div className='flex gap-1'>
                    <TypoText className='font-medium text-sm' text='Deja Brady' />
                    <TypoText text=' sent you a friend request' className='text-sm text-[#3f4852] font-normal' />
                  </div>
                  <div className='flex gap-1'>
                    <TypoText text='about 1 hour ago  -' className='text-textSecondary text-xs' />
                    <TypoText text='Communication' className='text-textSecondary text-xs' />
                  </div>
                  <div className='flex gap-2 p-3'>
                    <ButtonNormal text='Accept' size='small' />
                    <ButtonNormal text='Decline' size='small' variant='outlined' />
                  </div>
                </div>
              </div>
              <div className='flex gap-4 hover:bg-gray-extra p-5 cursor-pointer border-dashed border-t-0 border-r-0 border-l-0 border-b-[1px] border-b-gray-50'>
                <Avatar src='https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg' />
                <div>
                  <div className='flex gap-1'>
                    <TypoText className='font-medium text-sm' text='Deja Brady' />
                    <TypoText text=' sent you a friend request' className='text-sm text-[#3f4852] font-normal' />
                  </div>
                  <div className='flex gap-1'>
                    <TypoText text='about 1 hour ago  -' className='text-textSecondary text-xs' />
                    <TypoText text='Communication' className='text-textSecondary text-xs' />
                  </div>
                  <div className='flex gap-2 p-3'>
                    <ButtonNormal text='Accept' size='small' />
                    <ButtonNormal text='Decline' size='small' variant='outlined' />
                  </div>
                </div>
              </div>
              <div className='flex gap-4 hover:bg-gray-extra p-5 cursor-pointer border-dashed border-t-0 border-r-0 border-l-0 border-b-[1px] border-b-gray-50'>
                <Avatar src='https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg' />
                <div>
                  <div className='flex gap-1'>
                    <TypoText className='font-medium text-sm' text='Deja Brady' />
                    <TypoText text=' sent you a friend request' className='text-sm text-[#3f4852] font-normal' />
                  </div>
                  <div className='flex gap-1'>
                    <TypoText text='about 1 hour ago  -' className='text-textSecondary text-xs' />
                    <TypoText text='Communication' className='text-textSecondary text-xs' />
                  </div>
                  <div className='flex gap-2 p-3'>
                    <ButtonNormal text='Accept' size='small' />
                    <ButtonNormal text='Decline' size='small' variant='outlined' />
                  </div>
                </div>
              </div>
              <div className='flex gap-4 hover:bg-gray-extra p-5 cursor-pointer border-dashed border-t-0 border-r-0 border-l-0 border-b-[1px] border-b-gray-50'>
                <Avatar src='https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg' />
                <div>
                  <div className='flex gap-1'>
                    <TypoText className='font-medium text-sm' text='Deja Brady' />
                    <TypoText text=' sent you a friend request' className='text-sm text-[#3f4852] font-normal' />
                  </div>
                  <div className='flex gap-1'>
                    <TypoText text='about 1 hour ago  -' className='text-textSecondary text-xs' />
                    <TypoText text='Communication' className='text-textSecondary text-xs' />
                  </div>
                  <div className='flex gap-2 p-3'>
                    <ButtonNormal text='Accept' size='small' />
                    <ButtonNormal text='Decline' size='small' variant='outlined' />
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value='2'>empty</TabPanel>
          <TabPanel value='3'>empty</TabPanel>
        </TabContext>
        <div className='flex flex-col'>
          <ButtonNormal className='h-12' text='View All' variant='text' size='large' />
        </div>
      </Drawer>
    </>
  )
}

export default Notification
