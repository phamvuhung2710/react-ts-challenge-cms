import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from '~/components/Sidebar'
import Topbar from '~/components/Topbar'

export default function AdminLayout() {
  return (
    <Box p={5}>
      <Stack direction="row">
        <Sidebar />
        <Box paddingLeft={5} paddingRight={5}>
          <Topbar />
          <Outlet />
        </Box>
      </Stack>
    </Box>
  )
}
