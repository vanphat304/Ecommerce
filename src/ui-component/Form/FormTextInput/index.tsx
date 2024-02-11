import { FormControl, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material'

type Props = OutlinedInputProps & {
  label: string
  id: string
}
const FormTextInput = ({ label, id, ...props }: Props) => {
  return (
    <FormControl variant='outlined'>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput {...props} id={id} className='font-normal text-sm' fullWidth label={label}/>
    </FormControl>
  )
}

export default FormTextInput
