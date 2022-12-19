import { configureStore } from "@reduxjs/toolkit"
import admin from './admin-slice'
import createEditProduct from "./create-edit-product"

export const store = configureStore({
    reducer: {
        admin,
        createEditProduct
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch