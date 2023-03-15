import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return (
    <div className="app">
      <main className="content">{routeElements}</main>
    </div>
  )
}

export default App
