import { createSlice } from '@reduxjs/toolkit'

export const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: {
    usuario: { nome: '' },
    usuarios: [],
    pagination: {
      page: 1,
      totalPages: 1,
      total: 0,
    },
  },
  reducers: {
    setUsuario: (state, action) => {
      state.usuario = action.payload
    },
  },
})

export const { setUsuario } = usuarioSlice.actions
export default usuarioSlice.reducer