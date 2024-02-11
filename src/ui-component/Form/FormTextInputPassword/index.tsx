import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material'
import { TbEyeClosed } from 'react-icons/tb'
import { IoEyeSharp } from 'react-icons/io5'
import { useToggle } from 'src/hook/useToggle'

type Props = OutlinedInputProps & {
  label: string
  id: string
}

const FormTextInputPassword = ({ label, id, ...props }: Props) => {
  const [hidden, setHidden] = useToggle(true)

  return (
    <FormControl variant='outlined'>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        {...props}
        id={id}
        type={hidden ? 'password' : 'text'}
        className='font-normal text-sm'
        endAdornment={
          <InputAdornment position='end'>
            <IconButton aria-label='toggle password visibility' onClick={setHidden} onMouseDown={setHidden} edge='end'>
              {hidden ? <TbEyeClosed /> : <IoEyeSharp />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  )
}

export default FormTextInputPassword
