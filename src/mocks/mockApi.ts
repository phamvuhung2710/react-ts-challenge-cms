import { User } from '~/types/user.type'
import { mockUsers } from './mockUser'

interface SuccessResponse<Data> {
  message: string
  data: Data
}

export type LoginResponse = {
  access_token: string
  expires: number
  user: User | null
}

const loginUserApi = ({
  email,
  password
}: {
  email: string
  password: string
}): Promise<SuccessResponse<LoginResponse>> => {
  return new Promise((resolve, reject) => {
    const userFound = mockUsers.find((u) => u.email === email) || null
    if (!userFound) {
      setTimeout(() => reject(new Error('Username or password is incorrect')), 2000)
    }
    if (password !== '123456') {
      setTimeout(() => reject(new Error('Username or password is incorrect')), 2000)
    }

    setTimeout(
      () =>
        resolve({
          message: 'Login successfully',
          data: {
            access_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xOVQwNDoxODowMC4wNjRaIiwiaWF0IjoxNjcxNDIzNDgwLCJleHAiOjE2NzI0MjM0Nzl9.AxOvjaTErYwvOSdMWtZgefX8JJ3KaMCZWNCj72uqzYY',
            expires: 999999,
            user: userFound
          }
        }),
      2000
    )
  })
}

export { loginUserApi }
