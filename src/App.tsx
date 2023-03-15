import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { CssBaseline } from '@mui/material'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <Topbar />
          <Sidebar />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
