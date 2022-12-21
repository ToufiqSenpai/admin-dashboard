import React from 'react'
import { Select, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { handleChange } from '../../../redux/create-edit-product';

function CategorySelect() {
  const category = useSelector((state: RootState) => state.createEditProduct.data.category)
  const dispatch = useDispatch()

  return (
    <Select
      size='small'
      value={category}
      onChange={e => dispatch(handleChange({ prop: 'category', value: e.target.value }))}
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