import { User } from '~/types/user.type'

const mockUsers: User[] = [
  {
    id: 1,
    email: 'admin@gmail.com',
    name: 'Viet Ha',
    role: 'ADMIN'
  },
  {
    id: 2,
    email: 'user@gmail.com',
    name: 'Vu Hung',
    role: 'USER'
  },
  {
    id: 3,
    email: 'manager@gmail.com',
    name: 'Thu Thao',
    role: 'MANAGER'
  }
]

export { mockUsers }
