import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const NavItem = () => {
  return (
    <>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary='Starred' />
      </ListItemButton>
    </>
  )
}

export default NavItem
