import { useRouter } from 'next/router'
import React from 'react'
import CreateEditProduct from '../../components/admin/create-edit-product'
import Dashboard from '../../components/admin/dashboard'
import HeroCard from '../../components/admin/dashboard/HeroCard'
import RevenueStatistic from '../../components/admin/dashboard/RevenueStatistic'
import Navbar from '../../components/admin/Navbar'
import ProductsDashboard from '../../components/admin/products'
import Sidebar from '../../components/admin/Sidebar'


function DashboardRoute() {
  const { asPath } = useRouter()

  switch(asPath) {
    case '/admin/dashboard':
      return <Dashboard />
    case '/admin/products': 
      return <ProductsDashboard />
    case '/admin/products/add-product':
      return <CreateEditProduct />
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