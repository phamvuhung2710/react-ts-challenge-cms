import { Box, Stack } from '@mui/material'
import { Suspense, useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '~/components/Sidebar'
import { AppContext } from '~/contexts/app.context'
import { useAuthorize } from '~/hooks/useAuthorize'
import PATH, { DEFAULT_PATH_ROLE } from '~/constants/path'

export default function AdminLayout() {
  const { profile } = useContext(AppContext)
  const role = profile?.role
  const { isAuthorized } = useAuthorize(role)

  return (
    <Box p={5}>
      {isAuthorized ? (
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
            <Suspense>
              <Outlet />
            </Suspense>
          </Box>
        </Stack>
      ) : role ? (
        <Navigate to={DEFAULT_PATH_ROLE[role]} />
      ) : (
        <Navigate to={PATH.login} />
      )}
    </Box>
  )
}
