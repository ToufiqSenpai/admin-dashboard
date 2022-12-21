import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UpdateImage {
  index: number
  file: FileList
}

interface HandleChange {
  prop: string
  value: string
}

interface ProductData {
  name: string
  description: string
  category: string
  price: string
  weight: string
  stock: string
  images: any[]
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
    price: {
      basePrice: '',
      discountPrice: '',
      discount: false
    }
  }
}

export const createEditProduct = createSlice({
  name: 'create-edit-product',
  initialState,
  reducers: {
    handleChange: (state, action: PayloadAction<HandleChange>) => {
      const payload = action.payload
      state.data[payload.prop] = payload.value
    },
    addImages: (state, action: PayloadAction<FileList>) => {
      for(const file of action.payload) {
        const ext = file.name.split('.').pop()
        
        if(!(['jpg', 'jpeg', 'png'].includes(ext ?? ''))) continue
        // @ts-ignore
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
    }
  }
})

export const { 
  handleChange,
  addImages,
  updateImage,
  deleteImage,
  handleInStock
} = createEditProduct.actions

export default createEditProduct.reducer