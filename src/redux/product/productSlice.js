import { createSlice } from "@reduxjs/toolkit";
import { getProductById, getProductList } from "./productActions";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { setLimit, setSort, setFilters, setPage } =
//   productSlice.actions;

export default productSlice.reducer;
