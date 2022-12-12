import React from 'react'
import { useRouter } from 'next/router';
import { Drawer, Divider } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { sidebar } from '../../redux/admin-slice';
import { RootState } from '../../redux/store';
import InnerSidebar from './InnerSidebar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const sidebarEl: { label: string, icon: JSX.Element }[] = [
  {
    label: 'Dashboard',
    icon: <DashboardOutlinedIcon />
  }
]

function Sidebar() {
  const { query } = useRouter()
  const isOpen = useSelector((state: RootState) => state.admin.sidebar)
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Drawer
        anchor='left'
        variant='temporary'
        open={isOpen}
        onClose={() => dispatch(sidebar(false))}
        sx={ {
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }
        }}
      >
        <InnerSidebar />
      </Drawer>
      <Drawer
        variant='permanent'
          sx={ {
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }
          }}
          open
        >
          <InnerSidebar />
      </Drawer>
    </React.Fragment>
  )
}

export default Sidebar