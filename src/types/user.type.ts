type Role = 'ADMIN' | 'MANAGER' | 'USER'

export interface User {
  id: string
  email: string
  name?: string
  roles: Role[]
}
