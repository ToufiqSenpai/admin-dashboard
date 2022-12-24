import { Select, MenuItem, FormControl, FormHelperText } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { handleStateChange, setError } from '../../../redux/create-edit-product';

function CategorySelect() {
  const category = useSelector((state: RootState) => state.createEditProduct.data.category)
  const errors = useSelector((state: RootState) => state.createEditProduct.errors)
  const dispatch = useDispatch()

  return (
    <FormControl error={errors.category && true} fullWidth>
      <Select
        size='small'
        value={category}
        onChange={e => {
          dispatch(setError({ prop: 'category', value: '' }))
          dispatch(handleStateChange({ prop: 'category', value: e.target.value }))
        }}
      >
        <MenuItem value='Clothes'>Clothes</MenuItem>
        <MenuItem value='Food'>Food</MenuItem>
        <MenuItem value='Furniture'>Furniture</MenuItem>
        <MenuItem value='Phone'>Phone</MenuItem>
      </Select>
      <FormHelperText>{errors.category && errors.category}</FormHelperText>
    </FormControl>
  )
}

export default CategorySelect