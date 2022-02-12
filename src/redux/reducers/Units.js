// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from "@utils"
import { message } from "antd"

export const getCurrenciesList = createAsyncThunk('app/getCurrenciesList', async () => {
    const response = await http.get('/admin/currencies')
    return response.data?.data
})

export const getUnitList = createAsyncThunk('app/getUnitList', async () => {
    const response = await http.get('/admin/units')
    return response.data?.data
})


export const currenciesSlice = createSlice({
    name: 'units',
    initialState: {
        currencies: [],
        unit: [],
        isLoading: false
    },
    reducers: {
        // handleSearchQuery: (state, action) => {
        //     state.query = action.payload
        // }
    },
    extraReducers: {
        [getCurrenciesList.pending]: (state) => {
            state.isLoading = true
        },
        [getCurrenciesList.fulfilled]: (state, action) => {
            state.isLoading = false
            state.currencies = action?.payload
        },
        [getCurrenciesList.rejected]: (state) => {
            state.isLoading = false
            message.error("Serverda xatolik!")
        },

        [getUnitList.pending]: (state) => {
            state.isLoading = true
        },
        [getUnitList.fulfilled]: (state, action) => {
            state.isLoading = false
            state.unit = action?.payload
        },
        [getUnitList.rejected]: (state) => {
            state.isLoading = false
            message.error("Serverda xatolik!")
        }
    }
})

export const { } = currenciesSlice.actions

export default currenciesSlice.reducer
