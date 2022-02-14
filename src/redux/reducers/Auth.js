// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from "@utils"
import { message } from "antd"


export const loadUser = createAsyncThunk('app/getProfile', async () => {
  const token = localStorage.getItem('Qaccess_Token')
  if (token) {
    http.defaults.headers["Authorization"] = `Bearer ${token}`
  }
  const response = await http.get('/admin/admin-profile')
  if (response?.data?.data) {
    return {
      isAuth: true,
      user: response.data?.data
    }
  } else {
    return {
      isAuth: false
    }
  }
})

export const login = createAsyncThunk('app/Login', async (data) => {
  const response = await http.post('/admin/login', data)
  return response.data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    isAuth: false,
    isLoading: false,
    accessToken: localStorage.getItem('Qaccess_Token')
  },
  reducers: {
    handleLogout: state => {
      state.userData = {}
      state.accessToken = ''
      state.isAuth = false
      localStorage.removeItem('userData')
      localStorage.removeItem('Qaccess_Token')
      message.success("Tizimdan muvofaqiyatli chiqdingiz!")
    }
    // checkAuthUser: state => {
    //   const token = JSON.parse(localStorage.getItem('accessToken'))
    //   if (token) {
    //     loadUser()
    //     state.isAuth = true
    //   } else {
    //   }
    // }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.accessToken = action?.payload?.access_token
      state.isLoading = false
      localStorage.setItem('Qaccess_Token', action.payload.access_token)
      message.success("Tizimga muvofaqiyatli kirdingiz!")
    },
    [login.pending]: (state) => {
      state.isLoading = true
    },
    [login.rejected]: (state) => {
      state.isLoading = false
      message.error("Login yoki Parol xato!")
    },
    [loadUser.fulfilled]: (state, action) => {
      state.userData = action?.payload?.user
      state.isAuth = action?.payload?.isAuth
      localStorage.setItem('userData', JSON.stringify(action.payload))
    },
    [loadUser.rejected]: (state) => {
      state.isAuth = false
      localStorage.removeItem('userData')
      localStorage.removeItem('Qaccess_Token')
    }
  }
  // extraReducers: builder => {
  //   builder
  //     .addCase(login.fulfilled, (state, action) => {
  //       state.accessToken = action?.payload?.access_token
  //       localStorage.setItem('accessToken', action.payload.access_token)
  //     })
  //     .addCase(loadUser.fulfilled, (state, action) => {
  //       state.userData = action?.payload?.user
  //       state.isAuth = action?.payload?.isAuth
  //       localStorage.setItem('userData', JSON.stringify(action.payload))
  //     })
  // }
})

export const { handleLogout } = authSlice.actions

export default authSlice.reducer
