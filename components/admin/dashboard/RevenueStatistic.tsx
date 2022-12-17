import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

function RevenueStatistic() {
  return (
    <section className='grid grid-cols-[1fr,0.5fr] max-mobile:grid-cols-1 mx-5 mt-4 gap-5'>
      <div className='h-full bg-white rounded-lg shadow-1 p-2'>
        <ReactApexChart
          type='area'
          series={[
            {
              name: 'series1',
              data: [31, 40, 28, 51, 42, 109, 100]
            },
          ]}
          options={{
            chart: {
              type: 'area',
              zoom: { enabled: false }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            title: {
              text: 'Revenue for this month'
            }
          }}
        />
      </div>
      <div className='h-full max-mobile:h-[420px] bg-white rounded-lg shadow-1 p-2'>
        <ReactApexChart
          type='bar'
          series={[
            {
              data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }
          ]}
          options={{
            chart: {
              type: 'bar',
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'Germany'
              ],
            },
            title: {
              text: 'Most visited country'
            }
          }}
          height={'100%'}
        />
      </div>
    </section>
  )
}

export default RevenueStatistic