import { MENU_TYPE } from 'src/constant'
import { Gear, UserIcon, Bel, England, Vietnam } from 'src/ui-component/Icons'

const overview = {
  id: 'overview',
  title: 'Overview',
  type: MENU_TYPE.GROUP,
  children: [
    {
      icon: Gear,
      title: 'App',
      id: 'overview_app',
      path: '/dashboard',
      type: MENU_TYPE.ITEM
    },
    {
      icon: UserIcon,
      title: 'E-commerce',
      id: 'overview_E-commerce',
      path: '/dashboard/ecommerce',
      type: MENU_TYPE.ITEM
    },
    {
      icon: Bel,
      title: 'Analytics',
      id: 'overview_analytics',
      path: '/dashboard/analytics',
      type: MENU_TYPE.ITEM
    },
    {
      icon: England,
      title: 'Banking',
      id: 'overview_banking',
      path: '/dashboard/banking',
      type: MENU_TYPE.ITEM
    },
    {
      icon: Vietnam,
      title: 'booking',
      id: 'overview_booking',
      path: '/dashboard/booking',
      type: MENU_TYPE.ITEM
    }
  ]
}

export default overview
