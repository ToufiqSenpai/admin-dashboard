import React from 'react'
import { useRouter } from 'next/router';
import { Drawer, Divider } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { sidebar } from '../../redux/admin-slice';
import { RootState } from '../../redux/store';
import InnerSidebar from './InnerSidebar';

function Sidebar() {
  const { query } = useRouter()
  const isOpen = useSelector((state: RootState) => state.admin.sidebar)
  const dispatch = useDispatch()

  return (
    <aside className='max-ipad:hidden'>
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
    </aside>
  )
}

export default Sidebar