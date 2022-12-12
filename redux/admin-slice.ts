import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  sidebar: false
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    sidebar: (state, action: PayloadAction<boolean>) => {
      state.sidebar = action.payload
    }
  }
})

export const {
  sidebar
} = adminSlice.actions

export default adminSlice.reducer