import { List } from '@mui/material'
import { MENU_TYPE } from 'src/constant'
import { TMenuItem } from 'src/item-menus'
import TypoDisplay from 'src/ui-component/Typo/TypoDisplay'
import NavCollapse from '../NavCollapse'

type Props = {
  item: TMenuItem
}

const NavGroup = ({ item }: Props) => {
  const items = item.children.map((item) => {
    switch (item.type) {
      case MENU_TYPE.COlLAPSE:
        return <NavCollapse key={item.id} />
      case MENU_TYPE.ITEM:
            
      default:
        break
    }
  })

  return <List subheader={<TypoDisplay className='text-textSecondary' text={item.title} />}></List>
}

export default NavGroup
