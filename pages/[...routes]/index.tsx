import React from 'react'
import HeroCard from '../../components/admin/dashboard/HeroCard'
import Navbar from '../../components/admin/Navbar'
import Sidebar from '../../components/admin/Sidebar'


function index() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <main className='w-[calc(100%-240px)] max-ipad:w-full absolute top-14 right-0 bottom-0'>
        <HeroCard />
      </main>
    </div>
  )
}

export default index