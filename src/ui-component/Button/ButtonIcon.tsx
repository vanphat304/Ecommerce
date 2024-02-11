import { Badge, IconButton } from '@mui/material'

type Props = {
  Icon: ({ className }: { className?: string }) => JSX.Element
  countNotification?: number
  onClick?: (...args: any) => void
  className?: string
  size?: 'small' | 'medium' | 'large' | undefined
}

const ButtonIcon = ({ Icon, countNotification = 0, onClick, className, size = 'small' }: Props) => {
  return (
    <IconButton size={size} onClick={onClick}>
      <Badge badgeContent={countNotification} color='warning'>
        {<Icon className={`text-display-md rounded-md ${className}`} />}
      </Badge>
    </IconButton>
  )
}

export default ButtonIcon
