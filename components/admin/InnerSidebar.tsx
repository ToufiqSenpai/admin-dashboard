import React from 'react'
import { useRouter } from 'next/router'
import { Divider } from '@mui/material'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import titleCase from '../../utils/titleCase'

const iconProps = {
  className: 'mr-3',
  sx: {
    width: 28,
    height: 28
  }
}

const sidebarEl: { label: string, icon: JSX.Element }[] = [
  {
    label: 'dashboard',
    icon: <DashboardOutlinedIcon {...iconProps} />
  },
  {
    label: 'products',
    icon: <Inventory2OutlinedIcon {...iconProps} />
  },
  {
    label: 'order',
    icon: <ShoppingCartOutlinedIcon {...iconProps} />
  },
  {
    label: 'users',
    icon: <PersonOutlineOutlinedIcon {...iconProps} />
  },
  {
    label: 'statistics',
    icon: <StackedLineChartOutlinedIcon {...iconProps} />
  },
]

function InnerSidebar() {
  const { asPath, push } = useRouter()

  return (
    <div className='relative h-full'>
      <section className='flex items-center mx-auto my-8'>
        <h2 className='mx-auto font-bold text-[26px] m-0'>TCommerce</h2>
      </section>
      <Divider />
      <section className='mt-5'>
        {sidebarEl.map((el, index) => (
          <div 
            key={index} 
            className={`${asPath.startsWith(`/admin/${el.label}`) ? 'bg-black text-white' : ''} text-sm w-[85%] mx-auto mb-3 flex items-center font-medium px-2 py-1 rounded-md cursor-pointer`}
            onClick={() => push(`/admin/${el.label}`)} 
          >
            {el.icon}{titleCase(el.label)}
          </div>
        ))}
      </section>
      <div className='text-sm w-[85%] mx-auto mb-3 flex items-center font-medium px-2 py-1 rounded-md cursor-pointer absolute bottom-0 right-0 left-0'>
        <LogoutOutlinedIcon 
          {...iconProps}
        />Logout
      </div>
    </div>
  )
}

export default InnerSidebar