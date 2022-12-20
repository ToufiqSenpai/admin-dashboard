import { TextField } from '@mui/material'
import React from 'react'
import Images from './Images'

function CreateEditProduct() {
  return (
    <div className='grid grid-cols-[1fr,0.5fr] max-ipad:grid-cols-1 mx-5 gap-5'>
      <section className='bg-white shadow-1 p-4'>
      <h3 className='text-base font-semibold'>Product Name</h3>
        <TextField 
          // label='Product Name'
          fullWidth
        />
        <h3 className='text-base font-semibold mt-1'>Description</h3>
        <TextField 
          // label='Description'
          rows={5}
          multiline
          fullWidth
        />
        <Images />
      </section>
      <section className='bg-white shadow-1 p-4'>
        <h3 className='text-base font-semibold mb-1'>Product Price</h3>
        
      </section>
    </div>
  )
}

export default CreateEditProduct