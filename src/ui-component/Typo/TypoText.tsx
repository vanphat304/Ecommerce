import Typography from '@mui/material/Typography'

type Props = {
  text: React.ReactNode
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
const TypoText = ({
  text,
  variant = 'inherit',
  className = 'xl:text-sm lg:text-xs md:text-xs'
}: Props) => {
  return (
    <Typography variant={variant} className={`text-textPrimary font-light ${className}`}>
      {text}
    </Typography>
  )
}

export default TypoText
