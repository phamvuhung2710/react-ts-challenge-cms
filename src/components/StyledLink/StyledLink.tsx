import { styled } from '@mui/material/styles'
import { Link, LinkProps } from 'react-router-dom'

interface StyledLinkProps extends LinkProps {
  children: string
}

export default function StyledLink({ children, ...restProps }: StyledLinkProps) {
  const StyledCustomLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.main
  }))

  return <StyledCustomLink {...restProps}>{children}</StyledCustomLink>
}
