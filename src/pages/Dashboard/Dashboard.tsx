import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CollectionsIcon from '@mui/icons-material/Collections'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { Box, Typography } from '@mui/material'
import StatBox from '~/components/StatBox'


export default function Dashboard() {
  return (
    <Box m="2">
      <Box mt={1} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" fontWeight={700}>
          DASHBOARD
        </Typography>
      </Box>

      <Box mt={3} display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="60px">
        <Box
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ background: '#fff', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '8px' }}
        >
          <StatBox
            title="$90,000"
            subtitle="Revenue"
            icon={<AccountBalanceIcon sx={{ color: '#00aefd', fontSize: '45px' }} />}
          />
        </Box>
        <Box
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ background: '#fff', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '8px' }}
        >
          <StatBox
            title="225"
            subtitle="Projects"
            icon={<CollectionsIcon sx={{ color: '#00aefd', fontSize: '45px' }} />}
          />
        </Box>
        <Box
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ background: '#fff', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '8px' }}
        >
          <StatBox
            title="100"
            subtitle="Members"
            icon={<PersonAddIcon sx={{ color: '#00aefd', fontSize: '45px' }} />}
          />
        </Box>
      </Box>
    </Box>
  )
}
