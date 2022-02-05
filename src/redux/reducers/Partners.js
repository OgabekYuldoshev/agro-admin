// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from "@utils"
import { message } from "antd"

export const getPartner = createAsyncThunk('app/getPartner', async () => {
    const response = await http.get('/admin/partners')
    return response.data?.data
})

export const createPartner = createAsyncThunk('app/createPartner', async (data, { dispatch }) => {
    const response = await http.post('/admin/partners', data, {
        "Content-Type": "multipart/form-data"
    })
    if (response.status === 201) dispatch(getPartner())
    return response.data
})

export const deletePartner = createAsyncThunk('app/deletePartner', async (id, { dispatch }) => {
    const response = await http.delete(`/admin/partners/${id}`)
    if (response.status === 200) dispatch(getPartner())
})

export const updatePartner = createAsyncThunk('app/updatePartner', async ({ id, value }, { dispatch }) => {
    await http.put(`/admin/partners/${id}`, value)
    if (response.status === 200) dispatch(getPartner())
    return response.data
})


export const partnerSlice = createSlice({
    name: 'partner',
    initialState: {
        partners: []
    },
    reducers: {
        // handleSearchQuery: (state, action) => {
        //     state.query = action.payload
        // }
    },
    extraReducers: {
        [getPartner.fulfilled]: (state, action) => {
            state.partners = action?.payload
        },
        [getPartner.rejected]: () => {
            message.error("Serverda xatolik!")
        },
        [createPartner.fulfilled]: () => {
            message.success("Partner yaratildi!")
        },
        [createPartner.rejected]: () => {
            message.error("Serverda xatolik!")
        },
        [deletePartner.fulfilled]: () => {
            message.success("Partner o'chirildi!")
        },
        [deletePartner.rejected]: () => {
            message.error("Serverda xatolik!")
        },
        [updatePartner.fulfilled]: () => {
            message.error("Partner o'zgartirildi!")
        },
        [updatePartner.rejected]: () => {
            message.error("Serverda xatolik!")
        }
    }
    // extraReducers: builder => {
    //     builder
    //         .addCase(getCategory.fulfilled, (state, action) => {
    //             state.categories = action?.payload
    //         })
    // }
})

export const { } = partnerSlice.actions

export default partnerSlice.reducer
