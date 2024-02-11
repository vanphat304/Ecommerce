import { MenuItem } from '@mui/material'
import Menu from '@mui/material/Menu'
import React, { useState } from 'react'
import ButtonIcon from '../Button/ButtonIcon'
import { England, Vietnam } from '../Icons'

const language = [
  {
    Icon: England,
    name: 'English'
  },
  {
    Icon: Vietnam,
    name: 'Vietnamese'
  }
]

const ChangeLanguage = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [currenTarget, setCurrenTarget] = useState<{
    Icon: ({ className }: { className?: string }) => JSX.Element
    name: string
  }>(language[0])
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <ButtonIcon className='!text-xl' onClick={handleClick} Icon={currenTarget.Icon || null} />

      <Menu
        anchorEl={anchorEl}
        className='p-10'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      
      >
        {language.map(({ Icon, name }, index) => {
          return (
            <MenuItem
              selected={name === currenTarget.name}
              className='p-2'
              key={name}
              onClick={() => {
                handleClose()
                setCurrenTarget(language[index])
              }}
            >
              {<Icon className='text-md rounded-sm mr-4 ' />} {name}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

export default ChangeLanguage
