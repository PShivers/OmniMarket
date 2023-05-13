import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsAsync = createAsyncThunk(
	"products/getProductsAsync",
	async () => {
		const resp = await fetch(`/api/getProducts`);
		if (resp.ok) {
			const products = await resp.json();
			return products;
		}
	}
);

export const getProductsByNameAsync = createAsyncThunk(
	"products/getProductsByNameAsync",
	async (searchTerm) => {
		const resp = await fetch(`api/getProductsByName?q=${searchTerm}`);
		if (resp.ok) {
			const products = await resp.json();
			return products;
		}
	}
);

export const getProductByIdAsync = createAsyncThunk(
	`products/getProductByIdAsync`,
	async (productId) => {
		const resp = await fetch(`api/getProductById?productId=${productId}`);
		if (resp.ok) {
			const product = await resp.json();
			return product;
		}
	}
);

export const productSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProductsAsync.fulfilled, (state, action) => {
				return action.payload.products;
			})
			.addCase(getProductsByNameAsync.fulfilled, (state, action) => {
				return action.payload.getProductsByName;
			})
			.addCase(getProductByIdAsync.fulfilled),
			(state, action) => {
				return action.payload.product;
			};
	},
});

export default productSlice.reducer;
