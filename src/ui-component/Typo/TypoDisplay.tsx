import Typography from '@mui/material/Typography'

type Props = {
  text: string
  className?: string
  variant?:
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline'
    | 'inherit'
    | undefined
}
const TypoDisplay = ({
  text,
  variant = 'h3',
  className = 'xl:text-display-xl lg:text-display-lg md:text-display-md'
}: Props) => {
  return (
    <Typography variant={variant} className={`text-textPrimary font-bold ${className}`}>
      {text}
    </Typography>
  )
}

export default TypoDisplay
