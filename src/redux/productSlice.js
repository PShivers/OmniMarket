import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsAsync = createAsyncThunk(
	"products/getProducts",
	async (payload) => {
		const resp = await fetch(`/api/getProducts`);
		if (resp.ok) {
			const products = await resp.json();
			return products;
		}
	}
);

export const productSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProductsAsync.fulfilled, (state, action) => {
			return action.payload.products;
		});
	},
});

export default productSlice.reducer;
