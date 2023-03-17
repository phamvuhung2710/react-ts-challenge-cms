import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PATH from '~/constants/path'
import { AppContext } from '~/contexts/app.context'
import { clearLS } from '~/utils/auth'

export const useLogout = () => {
  const navigate = useNavigate()

  const { setProfile, setIsAuthenticated } = useContext(AppContext)

  const onLogout = () => {
    navigate(PATH.login)
    setProfile(null)
    setIsAuthenticated(false)
    clearLS()
  }

  return { onLogout }
}
