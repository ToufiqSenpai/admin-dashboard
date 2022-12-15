import React from 'react'
import Navbar from '../../components/admin/Navbar'
import Sidebar from '../../components/admin/Sidebar'

function index() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <main className='w-[calc(100%-240px)] max-ipad:w-full absolute top-14 right-0 bottom-0'>
        <section className='grid grid-cols-3 max-mobile:grid-cols-1 gap-5 px-5'>
          <div className='h-[180px] p-4 bg-amber-100 rounded-lg'>
            <div>
              <h6 >Balance</h6>
              <h3 className='text-3xl font-semibold'>$890</h3>
            </div>
          </div>
          <div className='h-[180px] bg-amber-200'></div>
          <div className='h-[180px] bg-amber-200'></div>
        </section>
      </main>
    </div>
  )
}

export default index