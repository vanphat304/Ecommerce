import React from 'react'
import { MENU_TYPE } from 'src/constant';
import menuItems from 'src/item-menus'
import TypoDisplay from 'src/ui-component/Typo/TypoDisplay';
import NavGroup from './NavGroup';

const MenuList = () => {

  const navItems = menuItems.map((item)=>{

    switch (item.type) {
      case MENU_TYPE.GROUP:
            return <NavGroup key={item.id} item={item} />          
    
      default:
        return <>
          <TypoDisplay text='Menu items errors' />
        </>
    }

  })

  return (
    <div>MenuList</div>
  )
}

export default MenuList