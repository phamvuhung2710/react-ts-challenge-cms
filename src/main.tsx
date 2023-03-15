import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { AppProvider } from './contexts/app.context'
import { ProSidebarProvider } from 'react-pro-sidebar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppProvider>
          <ProSidebarProvider>
            <App />
          </ProSidebarProvider>
        </AppProvider>
      </ThemeProvider>
    </SnackbarProvider>
  </BrowserRouter>
)
