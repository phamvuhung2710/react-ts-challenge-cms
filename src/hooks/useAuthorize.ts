/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '~/routes'

const formatRouters = () => {
  const newRouters: any[] = []
  routes.forEach((route) => {
    if (route.child && route.child.length > 0) {
      route.child.forEach((r) => newRouters.push(r))
    } else {
      newRouters.push(route)
    }
  })

  return newRouters
}

export const useAuthorize = (role: string | undefined) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false)

  const navigate = useNavigate()
  const location = useLocation()

  const newRouters = formatRouters()

  useEffect(() => {
    if (!role) {
      setIsAuthorized(false)
    } else {
      const routeFound = newRouters.find((route: any) => route.to === location.pathname)
      if (routeFound) {
        if (!routeFound.roles.includes(role)) {
          setIsAuthorized(false)
        } else {
          setIsAuthorized(true)
        }
      }
    }
  }, [location, role, newRouters, navigate])

  return { isAuthorized, setIsAuthorized }
}
