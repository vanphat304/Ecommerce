import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { MdExpandMore , MdExpandLess } from "react-icons/md";
const NavCollapse = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  return (
    <>
      <ListItemButton onClick={()=>{}}>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary='Inbox' />
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </ListItemButton> 
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          
        </List>
      </Collapse>
    </>
  )
}

export default NavCollapse
