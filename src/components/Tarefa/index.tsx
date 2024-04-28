import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

// ACTION
import { remover, editar } from '../../store/redux/reducer-tarefas'
import TarefaClass from '../../models/Tarefa'
type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  useEffect(() => {
    if (descricaoOriginal.length > 0) return setDescricao(descricaoOriginal)
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEditando(false)
    setDescricao(descricaoOriginal)
  }

  function salvarEdicao() {
    dispatch(
      editar({
        descricao,
        id: id,
        titulo,
        prioridade,
        status
      })
    )
    setEditando(false)
  }
  return (
    <>
      <S.Card>
        <S.Titulo>{titulo}</S.Titulo>
        <S.Tag parametro="prioridade" prioridade={prioridade}>
          {prioridade}
        </S.Tag>
        <S.Tag parametro="status" status={status}>
          {status}
        </S.Tag>
        <S.Descricao
          disabled={!estaEditando}
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
        />
        <S.BarraAcoes>
          {estaEditando ? (
            <>
              <S.BotaoSalvar onClick={() => salvarEdicao()}>
                Salvar
              </S.BotaoSalvar>
              <S.BotaoCancelarRemover onClick={() => cancelarEdicao()}>
                Cancelar
              </S.BotaoCancelarRemover>
            </>
          ) : (
            <>
              <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
              <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                Remover
              </S.BotaoCancelarRemover>
            </>
          )}
        </S.BarraAcoes>
      </S.Card>
    </>
  )
}

export default Tarefa
