import React from 'react'
import { Avatar, Badge, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sidebar } from '../../redux/admin-slice';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useRouter } from 'next/router';
import titleCase from '../../utils/titleCase';

function Navbar() {
  const isMobile = useMediaQuery('(max-width:560px)')
  const dispatch = useDispatch()
  const { asPath } = useRouter()

  return (
    <nav className='h-12 px-5 z-50 bg-[rgb(248,249,250)] flex items-center justify-between fixed top-0 w-full min-mobile:w-[calc(100%_-_240px)] min-mobile:right-0'>
      <section className='flex items-center'>
        <div className='flex items-center' onClick={() => dispatch(sidebar(true))}>
          {isMobile && <MenuRoundedIcon fontSize='large' />}
        </div>
        <h2 className='font-bold text-lg ml-3'>{titleCase(asPath.replace('/', ''))}</h2>
      </section>
      <section className='flex items-center cursor-pointer'>
        <div className='mr-3 flex items-center gap-2'>
          <MessageOutlinedIcon />
          <Badge badgeContent={2} color='error'>
            <NotificationsOutlinedIcon />
          </Badge>
        </div>
        <Avatar sx={{ width: 28, height: 28 }} />
        <h3 className='ml-3 font-semibold truncate w-40 max-mobile:hidden'>Muhammad Taufiqurrahman</h3>
        {/* <ArrowDropDownOutlinedIcon /> */}
      </section>
    </nav>
  )
}

export default Navbar