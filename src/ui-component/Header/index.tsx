import { useCallback, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import ButtonIcon from '../Button/ButtonIcon'
import TypoText from '../Typo/TypoText'
import ChangeLanguage from './ChangeLanguage'
import Contact from './Contact'
import ModalSearch from './ModalSearch'
import Notification from './Notification'
import Setting from './Setting'
import User from './User'

const Header = () => {
  const [modal, setModal] = useState<boolean>(false)

  const handleCancel = useCallback(()=>{
    setModal(false)
  },[])

  return (
    <div className='px-10 py-5 fixed top-0 right-0 w-96 backdrop-blur-sm'>
      <div className='flex items-center justify-between '>
        <div className='flex items-center'>
          <ButtonIcon onClick={()=>setModal(true)} Icon={IoSearch} />
          <TypoText text='⌘K' className='font-semibold text-sm !text-gray-200 px-1 rounded-md bg-gray-100 ' />
        </div>

        <div className='flex gap-2'>
          <ChangeLanguage />
          <Notification />
          <Contact />
          <Setting />
          <User />
        </div>
      </div>
      {modal && <ModalSearch handleClose={handleCancel} />}
    </div>
  )
}

export default Header
