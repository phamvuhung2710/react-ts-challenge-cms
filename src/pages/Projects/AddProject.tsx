import { Box, Typography } from '@mui/material'

export default function AddProject() {
  return (
    <Box m="2">
      <Box mt={1} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" fontWeight={700}>
          ADD PROJECTS
        </Typography>
      </Box>
    </Box>
  )
}
