import { Avatar, Badge, IconButton, MenuItem, Paper } from '@mui/material'
import Menu from '@mui/material/Menu'
import React, { useState } from 'react'
import ButtonIcon from '../Button/ButtonIcon'
import ButtonNormal from '../Button/ButtonNormal'
import { England, UserIcon, Vietnam } from '../Icons'
import TypoDisplay from '../Typo/TypoDisplay'
import TypoText from '../Typo/TypoText'

const User = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const userInfo = {
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg',
    name: 'Jaydon Frankie',
    email: 'demo@minimals.cc'
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Avatar sx={{ width: 36, height: 36 }} onClick={handleClick} src={userInfo.avatar} />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div className='w-52 shadow-menuShadow'>
          <div className='p-2'>
            <TypoText className='text-sm text-textPrimary font-medium' text={userInfo.name} />
            <TypoText className='text-sm text-gray-300' text={userInfo.email} />
          </div>

          <div className='border border-t-gray-50 border-b-gray-50 border-dashed border-l-0 border-r-0  '>
            <MenuItem className='p-2 rounded-md my-1 '>
              <TypoText className='text-sm font-normal text-textPrimary' text='Home' />
            </MenuItem>
            <MenuItem className='p-2 rounded-md my-1'>
              <TypoText className='text-sm font-normal text-textPrimary' text='Profile' />
            </MenuItem>
            <MenuItem className='p-2 rounded-md '>
              <TypoText className='text-sm font-normal text-textPrimary' text='Setttings' />
            </MenuItem>
          </div>
          <div>
            <MenuItem className='p-2 m-2 text-red-300 rounded-md'>
              <TypoText className='text-sm font-semibold text-red-400 ' text='Logout' />
            </MenuItem>
          </div>
        </div>
      </Menu>
    </>
  )
}

export default User
