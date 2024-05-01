import Tarefa from '../../components/Tarefa'
import { useSelector } from 'react-redux'
import * as S from '../../styles/styles'
import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )
  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    if (termo) {
      return (tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      ))
    }
    if (criterio === 'prioridade') {
      return (tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.prioridade === valor
      ))
    } else if (criterio === 'status') {
      return (tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.status === valor
      ))
    } else {
      return tarefasFiltradas
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontradas como: todas ${complemento}`
    } else {
      mensagem = `${quantidade} tarefas(s) encontradas como: "${`${criterio}=${valor}`} ${complemento}`
    }
    return mensagem
  }

  const tarefa = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefa.length)
  return (
    <>
      <S.MainContainer>
        <S.Titulo as="p">{mensagem}</S.Titulo>
        <ul>
          {tarefa.map(({ descricao, titulo, prioridade, status, id }) => (
            <li key={id}>
              <Tarefa
                id={id}
                descricao={descricao}
                prioridade={prioridade}
                titulo={titulo}
                status={status}
              />
            </li>
          ))}
        </ul>
      </S.MainContainer>
    </>
  )
}
export default ListaTarefas
