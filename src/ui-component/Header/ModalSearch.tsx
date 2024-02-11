import { Dialog, DialogContent, DialogContentText, DialogTitle, Input, TextField } from '@mui/material'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import TypoText from '../Typo/TypoText'

type Props = {
  handleClose: () => void
}

const ModalSearch = ({ handleClose }: Props) => {
  return (
    <Dialog open={true} onClose={handleClose} scroll={'paper'}>
      <DialogTitle>
        <div className='flex items-center ' >
          <IoSearch className='text-textSecondary text-display-xs mr-1' />
          <input
            className='outline-none p-1 flex-1 xl:text-lg text-md placeholder:text-textSecondary placeholder:text-lg placeholder:font-medium border-none font-bold text-textPrimary w-full h-8'
            placeholder='Search...'
            type='text'
          />
          <span className=' p-1 rounded bg-gray-100 text-xs font-semibold text-gray-200' >
            Esc
          </span>
        </div>
      </DialogTitle>
      <DialogContent dividers={true}>
                <Link to='/' className='p-2 border border-dashed border-white hover:border no-underline block rounded-md hover:border-primary-600 hover:bg-primary-100 hover:cursor-pointer hover:border-dashed  ' >
                      <TypoText className='text-sm text-textPrimary font-medium ' text='Details' />
                      <TypoText text='/path/new/e-commerce' />
                </Link>
                <Link to='/' className='p-2 border border-dashed border-white hover:border no-underline block rounded-md hover:border-primary-600 hover:bg-primary-100 hover:cursor-pointer hover:border-dashed  ' >
                      <TypoText className='text-sm text-textPrimary font-medium ' text='Details' />
                      <TypoText text='/path/new/e-commerce' />
                </Link>
                <Link to='/' className='p-2 border border-dashed border-white hover:border no-underline block rounded-md hover:border-primary-600 hover:bg-primary-100 hover:cursor-pointer hover:border-dashed  ' >
                      <TypoText className='text-sm text-textPrimary font-medium ' text='Details' />
                      <TypoText text='/path/new/e-commerce' />
                </Link>
                <Link to='/' className='p-2 border border-dashed border-white hover:border no-underline block rounded-md hover:border-primary-600 hover:bg-primary-100 hover:cursor-pointer hover:border-dashed  ' >
                      <TypoText className='text-sm text-textPrimary font-medium ' text='Details' />
                      <TypoText text='/path/new/e-commerce' />
                </Link>
                <Link to='/' className='p-2 border border-dashed border-white hover:border no-underline block rounded-md hover:border-primary-600 hover:bg-primary-100 hover:cursor-pointer hover:border-dashed  ' >
                      <TypoText className='text-sm text-textPrimary font-medium ' text='Details' />
                      <TypoText text='/path/new/e-commerce' />
                </Link>
                <Link to='/' className='p-2 border border-dashed border-white hover:border no-underline block rounded-md hover:border-primary-600 hover:bg-primary-100 hover:cursor-pointer hover:border-dashed  ' >
                      <TypoText className='text-sm text-textPrimary font-medium ' text='Details' />
                      <TypoText text='/path/new/e-commerce' />
                </Link>
                <Link to='/' className='p-2 border border-dashed border-white hover:border no-underline block rounded-md hover:border-primary-600 hover:bg-primary-100 hover:cursor-pointer hover:border-dashed  ' >
                      <TypoText className='text-sm text-textPrimary font-medium ' text='Details' />
                      <TypoText text='/path/new/e-commerce' />
                </Link>
                <Link to='/' className='p-2 border border-dashed border-white hover:border no-underline block rounded-md hover:border-primary-600 hover:bg-primary-100 hover:cursor-pointer hover:border-dashed  ' >
                      <TypoText className='text-sm text-textPrimary font-medium ' text='Details' />
                      <TypoText text='/path/new/e-commerce' />
                </Link>
                <Link to='/' className='p-2 border border-dashed border-white hover:border no-underline block rounded-md hover:border-primary-600 hover:bg-primary-100 hover:cursor-pointer hover:border-dashed  ' >
                      <TypoText className='text-sm text-textPrimary font-medium ' text='Details' />
                      <TypoText text='/path/new/e-commerce' />
                </Link>
      </DialogContent>
    </Dialog>
  )
}

export default ModalSearch
