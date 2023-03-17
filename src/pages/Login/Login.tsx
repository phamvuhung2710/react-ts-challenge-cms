/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Typography } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import { useSnackbar } from 'notistack'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StyledLink from '~/components/StyledLink'
import PATH, { DEFAULT_PATH_ROLE } from '~/constants/path'
import { AppContext } from '~/contexts/app.context'
import { loginUserApi } from '~/mocks/mockApi'
import { setAccessTokenToLS, setProfileToLS } from '~/utils/auth'
import { LoginSchema } from '~/utils/rules'
import LoginForm from './LoginForm'

const color = '#919EAB'

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}))

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(color, 0.12)}`,
  backgroundColor: theme.palette.background.default
}))

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0)
}))

export default function Login() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()

  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: LoginSchema) => {
    setIsLoading(true)
    try {
      const result = await loginUserApi(data)
      const { user, access_token } = result.data
      if (!user) return
      setProfile(user)
      setIsAuthenticated(true)
      setAccessTokenToLS(access_token)
      setProfileToLS(user)
      enqueueSnackbar(result.message, { variant: 'success' })

      const role = user.role
      navigate(DEFAULT_PATH_ROLE[role])
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
    setIsLoading(false)
  }
  return (
    <StyledRoot>
      <StyledSection>
        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
          Hi, Welcome Back
        </Typography>
        <img src="/assets/bg_login.png" alt="login" />
      </StyledSection>

      <Container maxWidth="sm">
        <StyledContent>
          <Typography variant="h4" gutterBottom>
            Sign in
          </Typography>

          <Typography variant="body2" sx={{ mb: 5 }}>
            Don’t have an account? {''}
            <StyledLink to={`/${PATH.register}`}>Sign up</StyledLink>
          </Typography>
          <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
        </StyledContent>
      </Container>
    </StyledRoot>
  )
}
