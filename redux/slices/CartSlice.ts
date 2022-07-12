import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {CartType, InitialCartStateType, ProductType } from "../../models";
import {AddProductsToCart, cartProducts} from "../../services";

const initial:  InitialCartStateType= {
    carts: {
        id: '',
        UserId: '',
        products: []
    },
    loading: false,
    error: '',
    currentCartId:'',
}
// cartProduct
export const CartProduct = createAsyncThunk(
    'cart-Api-Slice/cartProduct',
    async (_, { rejectWithValue }) => { 
        try {
            console.log("Loading started cart")
            const response = await cartProducts('User1')
            console.log("All Products in cart", response.data);
            return response.data[0]
        }
        catch (err) {
            // console.log("err in cart", err)
            return rejectWithValue(err)
        }
    }
)

export const AddToCart = createAsyncThunk(
    'cart-Api-Slice/AddToCart',
    async ({id, ProdId, UserId, price}: {id: string, ProdId: string, UserId: string, price: number}, { rejectWithValue }) => { 
        try {
            console.log("Loading started cart")
            console.log("CartId, ProdId, UserId, price", id, ProdId, UserId, price)
            const response = await AddProductsToCart(id, ProdId, UserId, price)
            console.log("Added Products in cart", response.data);
            return response.data[0]
        }
        catch (err) {
            console.log("err in cart", err)
            return rejectWithValue(err)
        }
    }
)

export const CartApiSlice = createSlice({
    name: 'cart-Api-Slice',
    initialState: initial,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(CartProduct.pending, state => {
                console.log("pending cart")
                state.loading = true
            })
            .addCase(CartProduct.fulfilled, (state, action: PayloadAction<CartType>) => {
                console.log("data found")
                state.loading = false
                console.log("actionnnn carrtttt", action.payload.id)
                console.log("actionnnn carrtttt", action.payload.UserId)
                console.log("actionnnn carrtttt", action.payload.products[0])

                state.carts.id = action.payload.id
                state.carts.UserId = action.payload.UserId
                state.carts.products = action.payload.products
                state.currentCartId = action.payload.id
            })
            .addCase(CartProduct.rejected, (state, action) => {
                console.log("rejected cart", action)
            })

            //AddToCart
            .addCase(AddToCart.pending, state => {
                console.log("pending add to cart")
                state.loading = true
            })
            .addCase(AddToCart.fulfilled, (state, action: PayloadAction<CartType>) => {
                console.log("data found")
                state.loading = false
                console.log("actionnnn Added to carrtttt", action.payload.id)
                console.log("actionnnn Added to carrtttt", action.payload.UserId)
                console.log("actionnnn Added to carrtttt", action.payload.products[0])
                state.carts = action.payload
            //     state.carts.UserId = action.payload.UserId
            //     state.carts.products = action.payload.products
            })
            .addCase(AddToCart.rejected, (state, action) => {
                console.log("rejected  Added to cart", action)
            })
    },
})

export default CartApiSlice.reducer;