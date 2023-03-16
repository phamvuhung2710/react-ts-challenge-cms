import React from 'react'
import { Box, Typography } from '@mui/material'

interface StatBoxProps {
  icon: React.ReactNode
  title: string
  subtitle: string
}

export default function StatBox({ icon, title, subtitle }: StatBoxProps) {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: 2, width: '70px', height: '70px', backgroundColor: 'rgba(0, 174, 253, 0.1)' }}
        >
          {icon}
        </Box>

        <Box textAlign="center">
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#222222' }}>
            {title}
          </Typography>
          <Typography mt="2px" variant="h5" sx={{ color: '#222222' }}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
