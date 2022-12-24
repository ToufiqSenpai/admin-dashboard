import { FormControlLabel, FormGroup, Switch, TextField, useMediaQuery } from '@mui/material'
import Router from 'next/router'
import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleStateChange, handleInStock, handleIsDiscount, setErrors, setError } from '../../../redux/create-edit-product'
import { RootState } from '../../../redux/store'
import CategorySelect from './CategorySelect'
import Images from './Images'

function CreateEditProduct() {
  const [unsaved, setUnsaved] = useState<boolean>(false)
  const data = useSelector((state: RootState) => state.createEditProduct.data)
  const errors = useSelector((state: RootState) => state.createEditProduct.errors)
  const dispatch = useDispatch()

  const isMobile = useMediaQuery(('(max-width:560px)'))

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setError({ prop: e.target.id, value: '' }))
    dispatch(handleStateChange({ prop: e.target.id, value: e.target.value }))
  }, [dispatch])

  useEffect(() => {
    const confirmationMessage = 'Changes you made may not be saved.'
    const beforeUnloadHandler = (e: BeforeUnloadEvent) => {
      (e || window.event).returnValue = confirmationMessage
      return confirmationMessage
    }

    const beforeRouteHandler = (url: string) => {
      if (Router.pathname !== url && !confirm(confirmationMessage)) {
        Router.events.emit('routeChangeError');
        throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
      }
    }

    if (unsaved) {
      window.addEventListener('beforeunload', beforeUnloadHandler);
      Router.events.on('routeChangeStart', beforeRouteHandler);
    } else {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
      Router.events.off('routeChangeStart', beforeRouteHandler);
    }

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
      Router.events.off('routeChangeStart', beforeRouteHandler);
    }
  }, [unsaved])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const formData: FormData = new FormData()

    for(const key in data) {
      if(key == 'images') {
        for(const image of data.images) {
          formData.append('images', image)
        }
        continue
      }
      formData.append(key, data[key])
    }

    fetch(process.env.NEXT_PUBLIC_API_URL + '/products/add-product', {
      method: "POST",
      body: formData
    }).then(response => response.json())
    .then(response => {
      if(response.status == 201) {
        Router.push('/admin/products')
      } else {
        dispatch(setErrors(response.errors))
      }
    })
  }

  return (
    <form className='grid grid-cols-3 max-ipad:grid-cols-1 mx-5 gap-5' onChange={() => !unsaved && setUnsaved(true)} onSubmit={handleSubmit}>
      <section className='bg-white shadow-1 p-4 h-min' style={{ gridArea: isMobile ? '' : '1 / 1 / span 3 / span 2' }}>
      <h3 className='text-base font-semibold'>Product Name</h3>
        <TextField 
          id='name'
          value={data.name}
          onChange={handleChange}
          error={errors.name && true}
          helperText={errors.name && errors.name}
          fullWidth
        />
        <h3 className='text-base font-semibold mt-1'>Description</h3>
        <TextField 
          id='description'
          value={data.description}
          error={errors.description && true}
          helperText={errors.description && errors.description}
          onChange={handleChange}
          rows={5}
          multiline
          fullWidth
        />
        <Images />
      </section>
      <section className='bg-white shadow-1 h-max p-4'>
        <FormGroup className='w-max'>
          <FormControlLabel 
            control={
              <Switch onChange={e => dispatch(handleInStock(e.target.checked))} defaultChecked={data.inStock} />
            } 
            label="In stock" 
          />
        </FormGroup>
        <h3 className='text-base font-semibold mt-1'>Category</h3>
        <CategorySelect />
        <h3 className='text-base font-semibold mt-1'>Weight</h3>
        <TextField
          id='weight'
          value={data.weight}
          onChange={handleChange}
          error={errors.weight && true}
          helperText={errors.weight && errors.weight}
          type='number'
          size='small'
          fullWidth
        />
        <h3 className='text-base font-semibold mt-1'>Stock</h3>
        <TextField
          id='stock'
          value={data.stock}
          onChange={handleChange}
          error={errors.stock && true}
          helperText={errors.stock && errors.stock}
          type='number'
          size='small'
          fullWidth
        />
      </section>
      <section className='bg-white shadow-1 h-max p-4'>
        <FormGroup className='w-max'>
          <FormControlLabel control={<Switch onChange={e => dispatch(handleIsDiscount(e.target.checked))} defaultChecked={data.isDiscount} />} label="Discount" />
        </FormGroup>
        <h3 className='text-base font-semibold mt-1'>Base Price</h3>
        <TextField
          value={data.basePrice}
          id='basePrice'
          onChange={handleChange}
          error={errors.basePrice && true}
          helperText={errors.basePrice && errors.basePrice}
          type='number'
          size='small'
          fullWidth
        />
        <h3 className='text-base font-semibold mt-1'>Discount Price</h3>
        <TextField
          value={data.discountPrice}
          id='discountPrice'
          onChange={handleChange}
          error={errors.discountPrice && true}
          helperText={errors.discountPrice && errors.discountPrice}
          type='number'
          size='small'
          fullWidth
        />
      </section>
      <button className='bg-blue-400 py-[10px] rounded-lg text-base font-semibold text-white' type='submit'>Create Product</button>
    </form>
  )
}

export default CreateEditProduct