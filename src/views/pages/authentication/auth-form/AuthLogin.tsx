import { Link } from 'react-router-dom'
import { ROUTER } from 'src/constant/pagepath'
import { themeColor } from 'src/constant/theme'
import ButtonNormal from 'src/ui-component/Button/ButtonNormal'
import FormTextInput from 'src/ui-component/Form/FormTextInput'
import FormTextInputPassword from 'src/ui-component/Form/FormTextInputPassword'
import TypoDisplay from 'src/ui-component/Typo/TypoDisplay'
import TypoText from 'src/ui-component/Typo/TypoText'

const AuthLogin = () => {
  return (
    <>
      <TypoDisplay
        className='xl:text-display-sm lg:text-display-md md:text-display-sm'
        variant='h4'
        text='Sign in to Minimal'
      />
      <div className='flex items-center gap-1 mb-10 mt-4'>
        <TypoText text='New user?' />
        <Link className='text-primary-500 font-semibold text-sm no-underline' to={ROUTER.Authenticate.register.path}>
          Create an account
        </Link>
      </div>

      <div className='bg-primary-400 rounded-md py-[6px] px-4 flex '>
        <div className='py-[7px] mr-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            aria-hidden='true'
            role='img'
            className='text-lg'
            width='1.5rem'
            height='1.5rem'
            viewBox='0 0 24 24'
          >
            <path
              fill={themeColor['--blue-300']}
              d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0Zm-1-7a1 1 0 1 1 1-1a1 1 0 0 1-1 1'
            />
          </svg>
        </div>

        <div className='flex py-2 flex-wrap'>
          <TypoText text='Use email :' />
          <TypoText className='font-semibold text-sm pr-[3px] ' text='demo@minimals.cc' />
          <TypoText text=' / password : ' />
          <TypoText className='font-semibold text-sm' text='demo1234' />
        </div>
      </div>
      <div className='mt-6 flex flex-col gap-5 '>
        <FormTextInput id='login_usename' label='Email address' />

        <FormTextInputPassword id='login_password' label='Password' />

        <Link to={'/'} className='text-right text-sm text-textPrimary'>
          Forgot password?
        </Link>

        <ButtonNormal className='h-12' text='Login' />
      </div>
    </>
  )
}

export default AuthLogin
