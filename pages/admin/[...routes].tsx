import { useRouter } from 'next/router'
import React from 'react'
import CreateEditProduct from '../../components/admin/create-edit-product'
import HeroCard from '../../components/admin/dashboard/HeroCard'
import RevenueStatistic from '../../components/admin/dashboard/RevenueStatistic'
import Navbar from '../../components/admin/Navbar'
import Sidebar from '../../components/admin/Sidebar'


function DashboardRoute() {
  const { asPath } = useRouter()

  switch(asPath) {
    case '/admin/dashboard':
      return (
        <React.Fragment>
          <HeroCard />
          <RevenueStatistic />
        </React.Fragment>
      )
    case '/admin/products/add-product':
      return (
        <React.Fragment>
          <CreateEditProduct />
        </React.Fragment>
      )
    default: 
      return <h1>Not found</h1>
  }
}

function index() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <main className='w-[calc(100%-240px)] max-ipad:w-full absolute top-14 right-0 bottom-0'>
        <DashboardRoute />
      </main>
    </div>
  )
}

export default index