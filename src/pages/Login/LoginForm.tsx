import { useState } from 'react'
import { Stack, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { styled } from '@mui/material/styles'
import { loginSchema, LoginSchema } from '~/utils/rules'

interface LoginFormProps {
  onSubmit: ({ email, password }: LoginSchema) => void
  isLoading: boolean
}

export default function LoginForm({ isLoading, onSubmit }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)

  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(loginSchema)
  })

  const onSubmitForm = (data: LoginSchema) => {
    if (onSubmit) {
      onSubmit(data)
    }
  }

  const StyledErrorMessage = styled(Typography)({
    color: 'red',
    fontSize: '12px',
    marginTop: '6px'
  })

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Stack>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <>
              <TextField label="Email address" {...field} />
              {errors['email']?.message && <StyledErrorMessage>{errors['email']?.message}</StyledErrorMessage>}
            </>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <>
              <TextField
                sx={{ marginTop: '24px' }}
                label="Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                {...field}
              />
              {errors['password']?.message && <StyledErrorMessage>{errors['password']?.message}</StyledErrorMessage>}
            </>
          )}
        />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" sx={{ mt: 4 }} loading={isLoading}>
        Login
      </LoadingButton>

      <Typography
        sx={{
          marginTop: '24px',
          color: '#50cd89',
          backgroundColor: 'rgba(80, 205, 137, 0.1)',
          padding: '16px',
          borderRadius: '6px'
        }}
        variant="subtitle2"
      >
        <span> ADMIN: admin@gmail.com | 123456</span>
        <br />
        <span> MANAGER: manager@gmail.com | 123456</span>
        <br />
        <span>USER: user@gmail.com | 123456</span>
      </Typography>
    </form>
  )
}
