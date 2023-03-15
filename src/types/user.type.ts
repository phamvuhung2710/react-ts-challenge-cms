type Role = 'ADMIN' | 'MANAGER' | 'USER'

export interface User {
  id: number
  email: string
  name?: string
  role: Role
}
