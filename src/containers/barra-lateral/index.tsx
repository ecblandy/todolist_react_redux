import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/filtro-card'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/redux/filtro'
import * as enums from '../../utils/enums/Tarefa'
import * as S from './styles'
import { Botao, Campo } from '../../styles/styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const navigate = useNavigate()
  return (
    <>
      <S.Aside>
        <div>
          {mostrarFiltros ? (
            <>
              <Campo
                type="text"
                placeholder="Buscar"
                value={termo}
                onChange={({ target }) => dispatch(alterarTermo(target.value))}
              />
              <S.Filtros>
                <FiltroCard
                  valor={enums.Status.PENDENTE}
                  criterio="status"
                  legenda="pendentes"
                />
                <FiltroCard
                  valor={enums.Status.CONCLUIDA}
                  criterio="status"
                  legenda="concluídas"
                />
                <FiltroCard
                  valor={enums.Prioridade.URGENTE}
                  criterio="prioridade"
                  legenda="urgentes"
                />
                <FiltroCard
                  valor={enums.Prioridade.IMPORTANTE}
                  criterio="prioridade"
                  legenda="importantes"
                />
                <FiltroCard
                  valor={enums.Prioridade.NORMAL}
                  criterio="prioridade"
                  legenda="normal"
                />
                <FiltroCard criterio="todas" legenda="todas" />
              </S.Filtros>
            </>
          ) : (
            <Botao onClick={() => navigate('/')} type="button">
              Voltar a lista de tarefas
            </Botao>
          )}
        </div>
      </S.Aside>
    </>
  )
}

export default BarraLateral
