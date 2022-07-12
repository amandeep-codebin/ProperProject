import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import ProductSlices from "./slices/ProductSlices";

 const store = configureStore({
    reducer:{
        productRedu: ProductSlices,
        CartRedu : CartSlice
    }
 })

 // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

 export default store