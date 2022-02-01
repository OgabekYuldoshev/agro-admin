// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from "@src/services"

export const getCategory = createAsyncThunk('app/getCategory', async () => {
    const response = await http.get('/admin/categories')
    return response.data?.data
})

export const createCategory = createAsyncThunk('app/createCategory', async (data) => {
    const response = await http.post('/admin/categories', data)
    return response.data
})

export const deleteCategory = createAsyncThunk('app/deleteCategory', async ({ id }) => {
    await http.delete(`/admin/categories/${id}`)
})

export const updateCategory = createAsyncThunk('app/updateCategory', async ({ id, value }) => {
    await http.put(`/admin/categories/${id}`, value)
    return response.data
})

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: []
    },
    reducers: {
        // handleSearchQuery: (state, action) => {
        //     state.query = action.payload
        // }
    },
    extraReducers: builder => {
        builder
            .addCase(getCategory.fulfilled, (state, action) => {
                state.categories = action?.payload
            })
    }
})

export const { } = categorySlice.actions

export default categorySlice.reducer
