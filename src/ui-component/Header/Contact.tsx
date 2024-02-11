import { Avatar, Badge, MenuItem, Paper } from '@mui/material'
import Menu from '@mui/material/Menu'
import React, { useState } from 'react'
import ButtonIcon from '../Button/ButtonIcon'
import { England, UserIcon, Vietnam } from '../Icons'
import TypoDisplay from '../Typo/TypoDisplay'
import TypoText from '../Typo/TypoText'

const contacts = [
  {
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg',
    name: 'Jayvion Simon',
    status: 'online',
    lastedDayActive: new Date().toISOString()
  },
  {
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg',
    name: 'Lorem ipsum dolor sit ',
    status: 'online',
    lastedDayActive: new Date().toISOString()
  },
  {
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg',
    name: 'Jayvion Simon',
    status: 'online',
    lastedDayActive: new Date().toISOString()
  },
  {
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg',
    name: 'Lorem ipsum dolor sit ',
    status: 'online',
    lastedDayActive: new Date().toISOString()
  },
  {
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg',
    name: 'Jayvion Simon',
    status: 'online',
    lastedDayActive: new Date().toISOString()
  },
  {
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg',
    name: 'Lorem ipsum dolor sit ',
    status: 'online',
    lastedDayActive: new Date().toISOString()
  },
  {
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg',
    name: 'Jayvion Simon',
    status: 'online',
    lastedDayActive: new Date().toISOString()
  },
  {
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg',
    name: 'Lorem ipsum dolor sit ',
    status: 'online',
    lastedDayActive: new Date().toISOString()
  }
]

const Contact = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <ButtonIcon onClick={handleClick} Icon={UserIcon} />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div className='w-72 h-96 shadow-menuShadow overflow-hidden '>
          <div>
            <TypoText className='text-lg text-textPrimary font-semibold p-3' text='Contacts(20)' />
          </div>
          <div className='h-full overflow-y-scroll' >
            {contacts.map(({ avatar, name, status }, index) => {
              return (
                <MenuItem className='p-2' key={name}>
                  <div className='flex gap-2 items-center'>
                    <Badge>
                      <Avatar src={avatar} />
                    </Badge>
                    <div >
                      <TypoText className='font-semibold text-sm' text={name} />
                      <TypoText className='text-xs text-textSecondary' text='2 days ago' />
                    </div>
                  </div>
                </MenuItem>
              )
            })}
          </div>
        </div>
      </Menu>
    </>
  )
}

export default Contact
