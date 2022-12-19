import React from 'react'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addImages } from '../../../redux/create-edit-product';

function Images() {
  const dispatch = useDispatch()

  const dropFileHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault()
    e.stopPropagation()
    
    const files: FileList = e.dataTransfer.files

    
  }

  return (
    <div className='mt-2'>
      <h3 className='text-base font-semibold mb-1'>Product Images</h3>
      <div onDrop={dropFileHandler} onDragOver={e => {
        e.preventDefault()
        e.stopPropagation()
      }}>
        <label className='w-full h-56 inline-block border border-dashed border-black hover:border-indigo-700 rounded-lg'>
          <input type='file' accept='.jpg, .jpeg, .png' hidden />
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
      </div>
    </div>
  )
}

export default Images