import React from 'react'
import { useRouter } from 'next/router'
import { Divider } from '@mui/material'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
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
    <React.Fragment>
      <section className='flex items-center mx-auto my-8'>
        {/* <img src='/assets/logos/zahra-zelita.png' width={70} */}
        <h2 className='mx-auto font-bold text-[26px] m-0'>TCommerce</h2>
      </section>
      <Divider />
      <section className='mt-5'>
        {sidebarEl.map((el, index) => (
          <div 
            key={index} 
            className={`${asPath.startsWith(`/${el.label}`) ? 'bg-black text-white' : ''} text-sm w-[85%] mx-auto mb-3 flex items-center font-medium px-2 py-1 rounded-md cursor-pointer`}
            onClick={() => push(`/${el.label}`)} 
          >
            {el.icon}{titleCase(el.label)}
          </div>
        ))}
        <div>
          
        </div>
      </section>
    </React.Fragment>
  )
}

export default InnerSidebar