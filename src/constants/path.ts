import ROLES from '~/constants/roles'

const PATH = {
  home: '',
  admin: 'admin',
  dashboard: 'dashboard',
  setting: 'setting',
  projects: 'projects',
  login: 'login',
  register: 'register'
}

export const DEFAULT_PATH_ROLE = {
  [ROLES.ADMIN]: `/${PATH.admin}/${PATH.dashboard}`,
  [ROLES.MANAGER]: `/${PATH.admin}/${PATH.setting}`,
  [ROLES.USER]: `/${PATH.home}`
}

export default PATH
