import React from 'react'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addImages, deleteImage } from '../../../redux/create-edit-product';
import { RootState } from '../../../redux/store';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

function Images() {
  const dispatch = useDispatch()
  const images = useSelector((state: RootState) => state.createEditProduct.data.images)

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>): void => {
    e.preventDefault()
    e.stopPropagation()
  }

  const dropFileHandler = (e: React.DragEvent<HTMLLabelElement>): void => {
    e.preventDefault()
    e.stopPropagation()

    if (!e.dataTransfer.files) return
    dispatch(addImages(e.dataTransfer.files))
  }

  const addFileHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return
    dispatch(addImages(e.target.files))
  }

  return (
    <div className='mt-2'>
      <h3 className='text-base font-semibold'>Product Images</h3>
      {!images.length ? (
        <label onDrop={dropFileHandler} onDragOver={handleDragOver} className='w-full h-56 inline-block border border-dashed border-black hover:border-indigo-700 rounded-lg'>
          <input type='file' accept='.jpg, .jpeg, .png' onChange={addFileHandler} multiple hidden />
          <div className='grid justify-center justify-items-center'>
            <Image
              src='/assets/icons/upload-icon.png'
              alt='upload-icon'
              width={120}
              height={120}
            />
            <p className='font-medium mt-3'>Drop your image here, or <span className='text-indigo-600'>browse</span></p>
            <p className='text-slate-500'>Support: .jpg, .jpeg, .png</p>
          </div>
        </label>
      ) : (
        <div className='grid grid-cols-[repeat(auto-fill,75px)] justify-between gap-2'>
          {images.map((image, index) => (
            <div key={index} className='relative'>
              <span onClick={() => dispatch(deleteImage(index))} className='z-10 absolute top-[2px] right-[2px] rounded-full text-white bg-[rgba(55,65,81,0.8)] flex justify-between items-center cursor-pointer'>
                <CloseOutlinedIcon
                  className='w-[18px] h-[18px]'
                />
              </span>
              <label className='relative border border-dashed border-slate-800 rounded-md w-[75px] h-[75px] flex justify-between items-center'>
                <Image
                  src={(image as File | string) instanceof File ? URL.createObjectURL(image) : (image as string)}
                  alt={`product-image-${index + 1}`}
                  className='object-contain'
                  fill
                />
                <input type='file' onChange={addFileHandler} hidden />
              </label>
            </div>
          ))}
          <label onDragOver={handleDragOver} onDrop={dropFileHandler} className='relative border border-dashed border-slate-800 rounded-md w-[75px] h-[75px] flex justify-between items-center'>
            <Image
              src='/assets/icons/upload-icon.png'
              alt='upload-icon'
              className='object-contain'
              fill
            />
            <input type='file' onChange={addFileHandler} multiple hidden />
          </label>
        </div>
      )}
    </div>
  )
}

export default React.memo(Images)