import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function StyledLink({ children, ...restProps }: any) {
  const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.main
  }))

  return <StyledLink {...restProps}>{children}</StyledLink>
}
