import LogoutIcon from '@mui/icons-material/Logout'
import { Box, IconButton, Typography } from '@mui/material'
import { useContext } from 'react'
import { Menu, MenuItem, Sidebar as ProSidebar, SubMenu, useProSidebar } from 'react-pro-sidebar'
import { Link, useNavigate } from 'react-router-dom'
import PATH from '~/constants/path'
import { AppContext } from '~/contexts/app.context'
import { routes } from '~/routes'
import { clearLS } from '~/utils/auth'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

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
  const { collapseSidebar, collapsed } = useProSidebar()

  const { profile, setProfile, setIsAuthenticated } = useContext(AppContext)
  const role = profile?.role
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate(PATH.login)
    setProfile(null)
    setIsAuthenticated(false)
    clearLS()
  }

  const renderMenu = () => {
    const filteredMenus = routes
    const menuElems = filteredMenus
      .filter((route) => {
        if (!role) return true
        return route.roles.includes(role)
      })
      .map((route) => {
        const { to, title, child } = route
        if (child) {
          return (
            <SubMenu key={title.toLowerCase()} label={title} icon={<route.icon />}>
              {child.map((sm) => (
                <Item key={sm.title} title={sm.title} to={sm.to} />
              ))}
            </SubMenu>
          )
        }
        return <Item key={title.toLowerCase()} title={title} icon={<route.icon />} to={to} />
      })

    menuElems.push(
      <MenuItem icon={<LogoutIcon />} onClick={handleLogout}>
        <Typography>Logout</Typography>
      </MenuItem>
    )

    return menuElems
  }

  return (
    <ProSidebar style={{ minHeight: '90vh', borderRadius: '8px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {!collapsed && (
          <Typography variant="h4" color="grey" gutterBottom sx={{ marginTop: 1 }}>
            {profile?.name || ''}
          </Typography>
        )}

        <IconButton sx={collapsed ? { margin: 'auto' } : {}} onClick={() => collapseSidebar()}>
          <MenuOutlinedIcon sx={{ fontSize: '30px' }} />
        </IconButton>
      </Box>
      <Menu>{renderMenu()}</Menu>
    </ProSidebar>
  )
}

export default Sidebar
