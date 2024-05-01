import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles/styles'
import Home from './pages/home'
import Cadastro from './pages/cadastro'
import store from './store'
const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
])
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
