import FiltroCard from '../../components/filtro-card'
import * as S from './styles'
const BarraLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Buscar" />
    <div>
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluídas" contador={2} />
        <FiltroCard legenda="urgentes" contador={3} />
        <FiltroCard legenda="importantes" contador={4} />
        <FiltroCard legenda="normal" contador={5} />
        <FiltroCard ativo legenda="todas" contador={6} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
