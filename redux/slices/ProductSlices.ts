import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddProductType, InitialProductStateType, ProductType } from "../../models";
import { fetchProducts, fetchSingleProduct, AddProducts, SearchAllProducts, cartProducts } from "../../services";

const initial: InitialProductStateType = {
    products: [],
    siglep: [],
    loading: false,
    error: ''
}
console.log("Enterred")
export const ProductsData = createAsyncThunk(
    'product-Api-Slice/productsData',
    // All products
    async (_, { rejectWithValue }) => { // Here _ representing void.
        try {
            console.log("Loading started prod")
            // const response = await axios.get("https://b721-116-75-167-118.in.ngrok.io")
            const response = await fetchProducts()
            console.log("All  Data fetched", response.data);
            return response.data
        }
        catch (err) {
            console.log("err pro ", err)
            return rejectWithValue(err)
        }
    })

//SearchAllProducts
export const SearchProduct = createAsyncThunk(
    'product-Api-Slice/searchProduct',
    async ({ term }: { term: string }, { rejectWithValue }) => { 
        try {
            console.log("Loading started")
            // const response = await axios.get("https://b721-116-75-167-118.in.ngrok.io")
            const response = await SearchAllProducts(term)
            console.log("All  Searched Products", response.data);
            return response.data
        }
        catch (err) {
            console.log("err ", err)
            return rejectWithValue(err)
        }
    }
)


// single product
export const ProductData = createAsyncThunk(
    'product-Api-Slice/productData',
    async ({ id }: { id: string }, { rejectWithValue }) => { // Here _ representing void.
        try {
            console.log("Loading started", id)
            const response = await fetchSingleProduct(id)
            console.log("Single Data fetched", response.data);
            return response.data
        }
        catch (err) {
            console.log("err ", err)
            return rejectWithValue(err)
        }
    })

// Add Product

export const AddProductData = createAsyncThunk(
    'product-Api-Slice/addproductData',
    async ({ title, price }: AddProductType, { rejectWithValue }) => { // Here _ representing void.
        try {
            console.log("Loading started")
            // const Prod: AddProductType = { title, price, desc, discount, image}
            const response = await AddProducts({ title, price })
            console.log("Data Added", response.data.data);
            return response.data.data
        }
        catch (err) {
            console.log("err ", err)
            return rejectWithValue(err)
        }
    })
export const productApiSlice = createSlice({
    name: 'product-Api-Slice',
    initialState: initial,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ProductsData.pending, state => {
                console.log("pending")
                state.loading = true
            })
            .addCase(ProductsData.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
                console.log("data found")
                state.loading = false
                //   console.log("actionnnn",action.payload)
                state.products = [...action.payload]
            })
            .addCase(ProductsData.rejected, (state, action) => {
                console.log("rejected", action)
            })

            //SearchProduct

            .addCase(SearchProduct.pending, state => {
                console.log("pending")
                state.loading = true
            })
            .addCase(SearchProduct.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
                console.log("data found")
                state.loading = false
                console.log("actionnnn search: ", action.payload)
                state.products = [...action.payload]
            })
            .addCase(SearchProduct.rejected, (state, action) => {
                console.log("rejected search", action)
            })

            //single Product
            .addCase(ProductData.pending, state => {
                console.log("pending")
                state.loading = true
            })
            .addCase(ProductData.fulfilled, (state, action) => {
                console.log("data found")
                state.loading = false
                state.siglep = [...action.payload]
            })
            .addCase(ProductData.rejected, (state, action) => {
                console.log("rejected", action)
            })


            //Add data
            .addCase(AddProductData.pending, state => {
                console.log("pending")
                state.loading = true
            })
            .addCase(AddProductData.fulfilled, (state, action: PayloadAction<ProductType>) => {
                console.log("data found")
                state.loading = false
                state.products.push(action.payload)
            })
            .addCase(AddProductData.rejected, (state, action) => {
                console.log("rejected", action)
            })

    },
})

export default productApiSlice.reducer;