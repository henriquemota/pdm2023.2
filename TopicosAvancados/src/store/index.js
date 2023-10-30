import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from './usuario'

export default configureStore({
  reducer: {
    usuario: usuarioReducer,
  },
})