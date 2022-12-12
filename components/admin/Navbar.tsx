import React from 'react'
import { useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sidebar } from '../../redux/admin-slice';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useRouter } from 'next/router';
import titleCase from '../../utils/titleCase';

function Navbar() {
  const isMobile = useMediaQuery('(max-width:560px)')
  const dispatch = useDispatch()
  const { asPath } = useRouter()

  return (
    <nav className='h-12 flex items-center justify-between fixed top-0 w-full min-mobile:w-[calc(100%_-_240px)] min-mobile:right-0 bg-blue-300'>
      <section className='ml-3 flex items-center'>
        <div className='flex items-center' onClick={() => dispatch(sidebar(true))}>
          {isMobile && <MenuRoundedIcon fontSize='large' />}
        </div>
        <h2 className='ml-1 font-bold'>{titleCase(asPath.replace('/', ''))}</h2>
      </section>
      <div>
        
      </div>
    </nav>
  )
}

export default Navbar