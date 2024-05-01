import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TypeState = {
  itens: Tarefa[]
}

const initialState: TypeState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar TypeScript',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.IMPORTANTE,
      descricao: 'Melhorar a tipagem '
    },
    {
      id: 2,
      titulo: 'Faculdade UNIME',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.URGENTE,
      descricao: 'Estudar sobre segurança da informação'
    },
    {
      id: 3,
      titulo: 'EBAC',
      status: enums.Status.CONCLUIDA,
      prioridade: enums.Prioridade.NORMAL,
      descricao: 'Finalizar curso'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaExiste = state.itens.find(
        (tarefa) => tarefa.titulo === action.payload.titulo
      )
      if (tarefaExiste) {
        alert('Ja existe')
      } else {
        state.itens = [...state.itens, action.payload]
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexTarefa = state.itens.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer
