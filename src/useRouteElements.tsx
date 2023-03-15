import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { AppContext } from './contexts/app.context'
import AdminLayout from './layouts/AdminLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import PATH from './constants/path'
import Dashboard from './pages/Dashboard'
import Setting from './pages/Setting'
import Projects, { AddProject, EditProject } from './pages/Projects'
import Home from './pages/Home'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <Home />
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: PATH.login,
          element: <Login />
        },
        {
          path: PATH.register,
          element: <Register />
        }
      ]
    },
    {
      path: PATH.admin,
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <AdminLayout />,
          children: [
            {
              path: PATH.dashboard,
              element: <Dashboard />
            },
            {
              path: PATH.setting,
              element: <Setting />
            },
            {
              path: PATH.projects,
              element: <Outlet />,
              children: [
                {
                  path: '',
                  element: <Projects />
                },
                {
                  path: 'add',
                  element: <AddProject />
                },
                {
                  path: 'edit',
                  element: <EditProject />
                },
                {
                  path: '*',
                  element: <NotFound />
                }
              ]
            },
            {
              path: '*',
              element: <NotFound />
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return routeElements
}
