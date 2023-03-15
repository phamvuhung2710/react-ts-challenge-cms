import DashboardIcon from '@mui/icons-material/Dashboard'
import InventoryIcon from '@mui/icons-material/Inventory'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import { Menu, MenuItem, Sidebar as ProSidebar, SubMenu } from 'react-pro-sidebar'
import { Link, useNavigate } from 'react-router-dom'
import PATH from '~/constants/path'
import { AppContext } from '~/contexts/app.context'
import { clearLS } from '~/utils/auth'

type ItemProps = {
  title: string
  to: string
  icon?: React.ReactNode
}

const Item = ({ title, to, icon }: ItemProps) => {
  return (
    <MenuItem active={window.location.pathname === to} icon={icon} component={<Link to={to} />}>
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

const Sidebar = () => {
  const { profile, setProfile, setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate(PATH.login)
    setProfile(null)
    setIsAuthenticated(false)
    clearLS()
  }

  return (
    <ProSidebar style={{ minHeight: '90vh', borderRadius: '8px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" ml="16px">
        <Typography variant="h3" color="grey" gutterBottom sx={{ marginTop: 2 }}>
          {profile?.name || ''}
        </Typography>
      </Box>
      <Menu>
        <Item title={'Dashboard'} icon={<DashboardIcon />} to={`/${PATH.admin}/${PATH.dashboard}`} />
        <Item title={'Settings'} icon={<SettingsIcon />} to={`/${PATH.admin}/${PATH.setting}`} />
        <SubMenu label="Projects" icon={<InventoryIcon />}>
          <Item title={'Projects'} to={`/${PATH.admin}/${PATH.projects}`} />
          <Item title={'Add Project'} to={`/${PATH.admin}/${PATH.projects}/add`} />
          <Item title={'Edit Project'} to={`/${PATH.admin}/${PATH.projects}/edit`} />
        </SubMenu>

        <MenuItem icon={<LogoutIcon />} onClick={handleLogout}>
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </ProSidebar>
  )
}

export default Sidebar
