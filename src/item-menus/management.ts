import { IoColorWandOutline } from 'react-icons/io5'
import { MENU_TYPE } from 'src/constant'
import { UserIcon } from 'src/ui-component/Icons'

const management = {
  title: 'management',
  id: 'management',
  type: MENU_TYPE.GROUP,
  children: [
    {
      icon: UserIcon,
      title: 'User',
      id: 'management_user',
      type: MENU_TYPE.COlLAPSE,
      children: [
        {
          icon: IoColorWandOutline,
          title: 'Profile',
          id: 'management_user_profile',
          path: '/dashboard/user',
          type: MENU_TYPE.ITEM
        },
        {
          icon: IoColorWandOutline,
          title: 'Cards',
          id: 'management_user_cards',
          path: '/dashboard/user/cards',
          type: MENU_TYPE.ITEM
        },
        {
          icon: IoColorWandOutline,
          title: 'List',
          id: 'management_user_list',
          path: '/dashboard/user/list',
          type: MENU_TYPE.ITEM
        },
        {
          icon: IoColorWandOutline,
          title: 'Create',
          id: 'management_user_create',
          path: '/dashboard/user/create',
          type: MENU_TYPE.ITEM
        },
        {
          icon: IoColorWandOutline,
          title: 'Edit',
          id: 'management_user_edit',
          path: '/dashboard/user/edit',
          type: MENU_TYPE.ITEM
        },
        {
          icon: IoColorWandOutline,
          title: 'Edit',
          id: 'management_user_edit',
          path: '/dashboard/user/edit',
          type: MENU_TYPE.ITEM
        }
      ]
    }
  ]
}

export default management
