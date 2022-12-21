import { Select, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { handleStateChange } from '../../../redux/create-edit-product';

function CategorySelect() {
  const category = useSelector((state: RootState) => state.createEditProduct.data.category)
  const dispatch = useDispatch()

  return (
    <Select
      size='small'
      value={category}
      onChange={e => dispatch(handleStateChange({ prop: 'category', value: e.target.value }))}
      fullWidth
    >
      <MenuItem value='Clothes'>Clothes</MenuItem>
      <MenuItem value='Food'>Food</MenuItem>
      <MenuItem value='Furniture'>Furniture</MenuItem>
      <MenuItem value='Phone'>Phone</MenuItem>
    </Select>
  )
}

export default CategorySelect