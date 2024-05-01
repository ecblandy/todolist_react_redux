import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Tarefa'
import * as S from './styles'
import { Botao } from '../../styles/styles'

// ACTION
import {
  remover,
  editar,
  alteraStatus
} from '../../store/redux/reducer-tarefas'
import TarefaClass from '../../models/Tarefa'
import { BotaoSalvar } from '../../styles/styles'
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

  function alteraEstado(evento: ChangeEvent<HTMLInputElement>) {
    console.log(evento.target.checked)
    dispatch(alteraStatus({ id, finalizado: evento.target.checked }))
  }
  return (
    <>
      <S.Card>
        <label htmlFor={titulo}>
          <input
            type="checkbox"
            id={titulo}
            onChange={alteraEstado}
            checked={status === enums.Status.CONCLUIDA}
          />
          <S.Titulo>
            {estaEditando && <em>Editando:</em>}
            {titulo}
          </S.Titulo>
        </label>
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
              <BotaoSalvar onClick={() => salvarEdicao()}>Salvar</BotaoSalvar>
              <S.BotaoCancelarRemover onClick={() => cancelarEdicao()}>
                Cancelar
              </S.BotaoCancelarRemover>
            </>
          ) : (
            <>
              <Botao onClick={() => setEditando(true)}>Editar</Botao>
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
