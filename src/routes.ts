import ROLES from './constants/roles'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import CollectionsIcon from '@mui/icons-material/Collections'
import PATH from './constants/path'

export const routes = [
  {
    to: `/${PATH.admin}/${PATH.dashboard}`,
    icon: HomeIcon,
    title: 'Dashboard',
    roles: [ROLES.ADMIN]
  },
  {
    to: `/${PATH.admin}/${PATH.setting}`,
    icon: SettingsIcon,
    title: 'Settings',
    roles: [ROLES.ADMIN]
  },
  {
    to: `/${PATH.admin}/${PATH.projects}`,
    icon: CollectionsIcon,
    title: 'Projects',
    roles: [ROLES.ADMIN, ROLES.MANAGER],
    child: [
      {
        title: 'Projects',
        to: `/${PATH.admin}/${PATH.projects}`
      },
      {
        title: 'Add Project',
        to: `/${PATH.admin}/${PATH.projects}/add`
      },
      {
        title: 'Edit Project',
        to: `/${PATH.admin}/${PATH.projects}/edit`
      }
    ]
  }
]
