import * as enums from '../utils/enums/Tarefa'
class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  id: number
  descricao: string
  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.id = id
    this.descricao = descricao
  }
}

export default Tarefa
