import React from 'react'
import Navbar from '../../components/admin/Navbar'
import Sidebar from '../../components/admin/Sidebar'

function index() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <main className='w-[calc(100%-240px)] absolute top-0 right-0 bottom-0'>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default index