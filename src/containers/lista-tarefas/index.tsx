import Tarefa from '../../components/Tarefa'
import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <>
      <S.Container>
        <p>
          2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
        </p>
        <ul>
          {itens.map(({ descricao, titulo, prioridade, status, id }, index) => (
            <>
              <li key={index}>
                <Tarefa
                  id={id}
                  descricao={descricao}
                  prioridade={prioridade}
                  titulo={titulo}
                  status={status}
                />
              </li>
            </>
          ))}
        </ul>
      </S.Container>
    </>
  )
}
export default ListaTarefas
