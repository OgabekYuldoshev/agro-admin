// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "@utils";
import { message } from "antd";
// import axios from 'axios'

export const getProducts = createAsyncThunk("app/getProducts", async (page) => {
  const response = await http.get(`/admin/products?page=${page}`);
  return response.data?.data;
});

export const createProduct = createAsyncThunk(
  "app/createProducts",
  async (data, { dispatch }) => {
    const response = await http.post("/admin/products", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (response.status === 201) dispatch(getProducts());
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "app/deleteProduct",
  async (id, { dispatch }) => {
    const response = await http.delete(`/admin/products/${id}`);
    if (response.status === 200) dispatch(getProducts());
  }
);

// export const updatePartner = createAsyncThunk('app/updatePartner', async ({ id, value }) => {
//     await http.put(`/admin/partners/${id}`, value)
//     return response.data
// })

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    total: 0,
    per_page: 0,
    current_page: 0,
  },
  reducers: {
    // handleSearchQuery: (state, action) => {
    //     state.query = action.payload
    // }
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action?.payload?.data;
      state.isLoading = false;
      state.total = action?.payload?.total;
      state.per_page = action?.payload?.per_page;
      state.current_page = action?.payload?.current_page;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
      message.error("Serverda xatolik!");
    },
    [createProduct.fulfilled]: () => {
      message.success("Mahsulot yaratildi!");
    },
    [createProduct.rejected]: () => {
      message.error("Serverda xatolik!");
    },
    [deleteProduct.fulfilled]: () => {
      message.success("Mahsulot o'chrildi!");
    },
    [deleteProduct.rejected]: () => {
      message.error("Serverda xatolik!");
    },
    // [deletePartner.rejected]: () => {
    //     message.error("Serverda xatolik!")
    // },
    // [updatePartner.rejected]: () => {
    //     message.error("Serverda xatolik!")
    // }
  },
  // extraReducers: builder => {
  //     builder
  //         .addCase(getCategory.fulfilled, (state, action) => {
  //             state.categories = action?.payload
  //         })
  // }
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
