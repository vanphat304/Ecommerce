import { Link } from 'react-router-dom'
import { ROUTER } from 'src/constant/pagepath'
import ButtonNormal from 'src/ui-component/Button/ButtonNormal'
import FormTextInput from 'src/ui-component/Form/FormTextInput'
import FormTextInputPassword from 'src/ui-component/Form/FormTextInputPassword'
import TypoDisplay from 'src/ui-component/Typo/TypoDisplay'
import TypoText from 'src/ui-component/Typo/TypoText'

const AuthRegister = () => {
  return (
    <>
      <TypoDisplay
        className='xl:text-display-sm lg:text-display-md md:text-display-sm'
        variant='h4'
        text='Get started absolutely free'
      />
      <div className='flex items-center gap-1 mb-10 mt-4'>
        <TypoText text=' Already have an account? ' />
        <Link className='text-primary-500 font-semibold text-sm no-underline' to={ROUTER.Authenticate.login.path}>
          Sign in
        </Link>
      </div>

      <div className='flex gap-4 py-[7px] mr-3'>
        <FormTextInput label={'First name'} id={'first_name'} />
        <FormTextInput label={'Last name'} id={'last_name'} />
      </div>

      <div className='mt-3 flex flex-col gap-5 '>
        <FormTextInput id='login_username' label='Email address' />
        <FormTextInputPassword id='login_password' label='Password' />
        <ButtonNormal text='Create account' />
        <div className='text-xs flex '>
          <TypoText className='text-xs' text='By signing up, I agree to ' />
          <a className='text-textPrimary font-light px-1 ' href='/'>
            Terms of Service
          </a>
          <TypoText text='a' />
          <a target={'_blank'} className='text-textPrimary font-light px-1 ' href='/'>
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  )
}

export default AuthRegister
