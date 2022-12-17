import { useState } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import PasswordInput from '../components/login/PasswordInput'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'

function Login() {
  const [password, setPassword] = useState<string>('')

  return (
    <form className='max-w-md max-mobile:max-w-[95%] m-auto h-max absolute top-0 bottom-0 left-0 right-0 bg-white shadow-1 rounded-lg'>
      <header className='text-center px-4 mt-3'>
        <h1 className='text-2xl font-semibold'>Welcome Back</h1>
        <p className='text-sm mt-2'>Please enter your credential</p>
      </header>
      <div className='mt-4 px-4'>
        <label className='font-medium'>Email</label>
        <TextField
          type='email'
          size='small'
          margin='dense'
          InputProps={{
            endAdornment: <InputAdornment position='end'><AlternateEmailOutlinedIcon /></InputAdornment>
          }}
          fullWidth
        />
        <label className='font-medium'>Password</label>
        <PasswordInput
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <div className='flex justify-end my-1'>
          <Link href='/forget-password' className='text-sm text-blue-400 cursor-pointer no-underline hover:underline'>Forget Password?</Link>
        </div>
      </div>
      <section className='px-4'>
        <button type='submit' className='mt-2 bg-black hover:bg-slate-800 w-full py-[6px] text-lg rounded-md text-white font-medium'>Login</button>
        <div className='border border-solid border-slate-400 mt-2 rounded-md px-4 py-[6px] flex justify-center items-center cursor-pointer hover:border-slate-700'>
          <div className='relative'>
            <Image alt='google-logo' src='/assets/icon/google-logo.png' width={25} height={25} />
          </div>
          <div className='text-black text-base ml-2 font-medium'>Sign In with Google</div>
        </div>
      </section>
      <div className='mt-5 mb-3 text-center text-sm text-gray-400'>Don{"'"}t have an account? <Link href='/signup' className='text-blue-400 no-underline hover:underline'>Sign Up</Link></div>
    </form>
  )
}

export default Login