import { configureStore } from "@reduxjs/toolkit"
import admin from './admin-slice'

export const store = configureStore({
    reducer: {
        admin,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch