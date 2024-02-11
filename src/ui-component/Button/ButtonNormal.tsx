import { LoadingButton } from '@mui/lab'

interface Props {
  loading?: boolean
  text?: string
  variant?: 'text' | 'outlined' | 'contained' | undefined
  size?: 'small' | 'medium' | 'large' | undefined
  className?: string
  children?: React.ReactNode
  startIcon?: React.ReactNode
}

const ButtonNormal = ({
  loading = false,
  text,
  variant = 'contained',
  size = 'medium',
  startIcon,
  className,
  children

}: Props) => {
  return (
    <LoadingButton
      className={`outline-none capitalize font-semibold rounded-md ${className}`}
      loading={loading}
      variant={variant}
      size={size}
      startIcon={startIcon}
    >
      {children ? children : <span>{text}</span>}
    </LoadingButton>
  )
}

export default ButtonNormal
