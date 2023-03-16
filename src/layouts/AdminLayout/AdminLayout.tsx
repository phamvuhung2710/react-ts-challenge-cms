import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from '~/components/Sidebar'

export default function AdminLayout() {
  return (
    <Box p={5}>
      <Stack direction="row">
        <Sidebar />
        <Box
          borderRadius={2}
          ml={2}
          paddingLeft={5}
          paddingRight={5}
          width={'100%'}
          sx={{ backgroundColor: '#f5f5f5' }}
        >
          <Outlet />
        </Box>
      </Stack>
    </Box>
  )
}
