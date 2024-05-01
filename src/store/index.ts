import { configureStore } from '@reduxjs/toolkit'
import tarefaReducer from './redux/reducer-tarefas'
import filtroReducer from './redux/filtro'
const store = configureStore({
  reducer: {
    tarefas: tarefaReducer,
    filtro: filtroReducer
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
