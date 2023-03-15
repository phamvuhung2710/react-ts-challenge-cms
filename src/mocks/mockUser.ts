import { User } from '~/types/user.type'

const mockUsers: User[] = [
  {
    id: 1,
    email: 'admin@gmail.com',
    name: 'Việt Hà',
    role: 'ADMIN'
  },
  {
    id: 2,
    email: 'user@gmail.com',
    name: 'Vũ Hùng',
    role: 'USER'
  },
  {
    id: 3,
    email: 'manager@gmail.com',
    name: 'Thu Thảo',
    role: 'MANAGER'
  }
]

export { mockUsers }
