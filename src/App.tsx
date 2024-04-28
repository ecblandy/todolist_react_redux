import { Provider } from 'react-redux'
import BarraLateral from './containers/barra-lateral'
import ListaTarefas from './containers/lista-tarefas'
import EstiloGlobal, { Container } from './styles'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaTarefas />
      </Container>
    </Provider>
  )
}

export default App
