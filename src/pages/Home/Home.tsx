import { Box, Button, Typography } from '@mui/material'
import { useLogout } from '~/hooks/useLogout'

export default function Home() {
  const { onLogout } = useLogout()

  return (
    <Box m={2}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        HOME
      </Typography>
      <Button variant="contained" color="primary" onClick={() => onLogout()}>
        Logout
      </Button>
    </Box>
  )
}
