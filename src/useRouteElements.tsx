import { useContext, lazy, Suspense } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import PATH from './constants/path'
import { AppContext } from './contexts/app.context'
import AdminLayout from './layouts/AdminLayout'

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Home = lazy(() => import('./pages/Home'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Setting = lazy(() => import('./pages/Setting'))
const Projects = lazy(() => import('./pages/Projects'))
const AddProject = lazy(() => import('./pages/Projects/AddProject'))
const EditProject = lazy(() => import('./pages/Projects/EditProject'))
const NotFound = lazy(() => import('./pages/NotFound'))

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
          element: (
            <Suspense>
              <Home />
            </Suspense>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: PATH.login,
          element: (
            <Suspense>
              <Login />
            </Suspense>
          )
        },
        {
          path: PATH.register,
          element: (
            <Suspense>
              <Register />
            </Suspense>
          )
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
      element: (
        <Suspense>
          <NotFound />
        </Suspense>
      )
    }
  ])
  return routeElements
}
