import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UpdateImage {
  index: number
  file: FileList
}

interface HandleChange {
  prop: string
  value: string
}

interface HandlePrice {
  prop: 'basePrice' | 'discountPrice'
  value: string
}

const initialState = {
  data: {
    name: '',
    description: '',
    category: '',
    weight: '',
    stock: '',
    images: [],
    inStock: true,
    basePrice: '',
    discountPrice: '',
    isDiscount: false
  }
}

export const createEditProduct = createSlice({
  name: 'create-edit-product',
  initialState,
  reducers: {
    handleStateChange: (state, action: PayloadAction<HandleChange>) => {
      const payload = action.payload
      state.data[payload.prop] = payload.value
    },
    addImages: (state, action: PayloadAction<FileList>) => {
      for(const file of action.payload) {
        const ext = file.name.split('.').pop()
        if(!(['jpg', 'jpeg', 'png'].includes(ext ?? ''))) continue

        state.data.images.push(file)
      }
    },
    updateImage: (state, action: PayloadAction<UpdateImage>) => {
      const payload = action.payload
      state.data.images[payload.index] = payload.file[0]
    },
    deleteImage: (state, action: PayloadAction<number>) => {
      state.data.images = state.data.images.filter((_, index) => index != action.payload)
    },
    handleInStock: (state, action: PayloadAction<boolean>) => {
      state.data.inStock = action.payload
    },
    handleIsDiscount: (state, action: PayloadAction<boolean>) => {
      state.data.isDiscount = action.payload
    }
  }
})

export const { 
  handleStateChange,
  addImages,
  updateImage,
  deleteImage,
  handleInStock,
  handleIsDiscount
} = createEditProduct.actions

export default createEditProduct.reducer