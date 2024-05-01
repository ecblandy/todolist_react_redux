import BarraLateral from '../../containers/barra-lateral'
import ListaTarefas from '../../containers/lista-tarefas'
import BotaoAdicionar from '../../components/nova-tarefa'
const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <ListaTarefas />
      <BotaoAdicionar />
    </>
  )
}
export default Home
