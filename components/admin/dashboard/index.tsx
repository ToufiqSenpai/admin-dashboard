import React from 'react'
import HeroCard from './HeroCard'
import RevenueStatistic from './RevenueStatistic'

function Dashboard() {
  return (
    <React.Fragment>
      <HeroCard />
      <RevenueStatistic />
    </React.Fragment>
  )
}

export default Dashboard