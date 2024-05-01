import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { Form, Opcoes, Opcao } from './styles'
import { cadastrar } from '../../store/redux/reducer-tarefas'
import { useNavigate } from 'react-router-dom'
import Tarefa from '../../models/Tarefa'
import * as S from '../../styles/styles'
import * as enums from '../../utils/enums/Tarefa'
const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  function cadastrarTarefa(evento: FormEvent) {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      9
    )
    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }

  return (
    <>
      <S.MainContainer>
        <S.Titulo>Nova tarefa</S.Titulo>
        <Form onSubmit={cadastrarTarefa}>
          <S.Campo
            value={titulo}
            onChange={({ target }) => setTitulo(target.value)}
            type="text"
            placeholder="Título"
          />
          <S.Campo
            value={descricao}
            onChange={({ target }) => setDescricao(target.value)}
            as="textarea"
            placeholder="Descrição da tarefa"
          ></S.Campo>
          <Opcoes>
            <p>Prioridade</p>
            {Object.values(enums.Prioridade).map((prioridade) => (
              <Opcao key={prioridade}>
                <input
                  value={prioridade}
                  name="prioridade"
                  type="radio"
                  id={prioridade}
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                  onChange={(evento) =>
                    setPrioridade(evento.target.value as enums.Prioridade)
                  }
                />
                <label htmlFor={prioridade}>{prioridade}</label>
              </Opcao>
            ))}
          </Opcoes>
          <S.BotaoSalvar type="submit">Cadastrar</S.BotaoSalvar>
        </Form>
      </S.MainContainer>
    </>
  )
}
export default Formulario
