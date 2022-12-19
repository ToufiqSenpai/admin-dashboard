import { TextField } from '@mui/material'
import React from 'react'
import Images from './Images'

function CreateEditProduct() {
  return (
    <div className='grid grid-cols-[1fr,0.5fr] max-ipad:grid-cols-1 mx-5 gap-5'>
      <section className='bg-white shadow-1 p-4'>
        <TextField 
          margin='dense'

          label='Product Name'
          fullWidth
        />
        <TextField 
          margin='dense'
          label='Description'
          rows={5}
          multiline
          fullWidth
        />
        <Images />
      </section>
      <section className='bg-white shadow-1 p-2'>

      </section>
    </div>
  )
}

export default CreateEditProduct