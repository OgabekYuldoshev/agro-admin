// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from "@utils"
import { message } from 'antd'

export const getCategory = createAsyncThunk('app/getCategory', async () => {
    const response = await http.get('/admin/categories')
    return response.data?.data
})

export const createCategory = createAsyncThunk('app/createCategory', async (data, { dispatch }) => {
    const response = await http.post('/admin/categories', data)
    if (response.status === 201) dispatch(getCategory())
    return response.data
})

export const deleteCategory = createAsyncThunk('app/deleteCategory', async ({ id }, { dispatch }) => {
    const response = await http.delete(`/admin/categories/${id}`)
    if (response.status === 200) dispatch(getCategory())

})

export const updateCategory = createAsyncThunk('app/updateCategory', async ({ id, value }, { dispatch }) => {
    const response = await http.put(`/admin/categories/${id}`, value)
    if (response.status === 200) dispatch(getCategory())
    return response.data
})

export const createSubCategory = createAsyncThunk('app/createSubCategory', async (data) => {
    const response = await http.post('/admin/sub_categories', data)
    return response.data
})

export const deleteSubCategory = createAsyncThunk('app/deleteSubCategory', async ({ id }) => {
    await http.delete(`/admin/sub_categories/${id}`)
})

export const updateSubCategory = createAsyncThunk('app/updateSubCategory', async ({ id, value }) => {
    await http.put(`/admin/sub_categories/${id}`, value)
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
    extraReducers: {
        [getCategory.fulfilled]: (state, action) => {
            state.categories = action?.payload
        },
        [getCategory.rejected]: () => {
            message.error("Serverda xatolik!")
        },
        [createCategory.rejected]: () => {
            message.error("Serverda xatolik!")
        },
        [updateCategory.rejected]: () => {
            message.error("Serverda xatolik!")
        },
        [deleteCategory.rejected]: () => {
            message.error("Serverda xatolik!")
        },
        [createSubCategory.rejected]: () => {
            message.error("Serverda xatolik!")
        },
        [deleteSubCategory.rejected]: () => {
            message.error("Serverda xatolik!")
        },
        [updateSubCategory.rejected]: () => {
            message.error("Serverda xatolik!")
        }
    }
})

export const { } = categorySlice.actions

export default categorySlice.reducer
