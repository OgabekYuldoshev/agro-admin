// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from "@src/services"

export const login = createAsyncThunk('app/Login', async (data) => {
  const response = await http.post('/admin/login', data)
  return response.data
})

const initialUser = () => {
  const item = window.localStorage.getItem('userData')
  return item ? JSON.parse(item) : {}
}

const initialToken = () => {
  const item = window.localStorage.getItem('accessToken')
  return item ? JSON.parse(item) : {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: initialUser(),
    accessToken: initialToken()
  },
  reducers: {
    handleLogout: state => {
      state.userData = {}
      state.accessToken = ''
      localStorage.removeItem('userData')
      localStorage.removeItem('accessToken')
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.userData = action?.payload
        state.accessToken = action?.payload?.accessToken
        localStorage.setItem('userData', JSON.stringify(action.payload))
        localStorage.setItem('accessToken', JSON.stringify(action.payload.accessToken))
      })
  }
})

export const { handleLogin, handleLogout } = authSlice.actions

export default authSlice.reducer
