import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import EqualizerIcon from '@mui/icons-material/Equalizer';

function HeroCard() {
  return (
    <section className='grid min-desktop:grid-cols-4 max-mobile:grid-cols-1 min-mobile:grid-cols-2 gap-5 px-5'>
      <div className='h-[120px] px-4 py-3 bg-cyan-100 rounded-lg relative flex flex-col justify-between'>
        <div className='flex justify-between'>
          <div>
            <h6 className='text-base text-slate-600 font-medium'>Revenue</h6>
            <h3 className='text-2xl font-semibold'>$1340</h3>
          </div>
          <div className='w-7 h-7 bg-white flex justify-center items-center p-[18px] rounded-full'>
            <AttachMoneyIcon />
          </div>
        </div>
        <div className='text-green-500'>
          <ArrowUpwardIcon />10.11% <span className='text-slate-900 ml-2'>Since last month</span>
        </div>
      </div>
      <div className='h-[120px] px-4 py-3 bg-amber-100 rounded-lg relative flex flex-col justify-between'>
        <div className='flex justify-between'>
          <div>
            <h6 className='text-base text-slate-600 font-medium'>Order</h6>
            <h3 className='text-2xl font-semibold'>690</h3>
          </div>
          <div className='w-7 h-7 bg-white flex justify-center items-center p-[18px] rounded-full'>
            <ShoppingCartIcon />
          </div>
        </div>
        <div className='text-green-500'>
          <ArrowUpwardIcon />5.49% <span className='text-slate-900 ml-2'>Since last month</span>
        </div>
      </div>
      <div className='h-[120px] px-4 py-3 bg-emerald-100 rounded-lg relative flex flex-col justify-between'>
        <div className='flex justify-between'>
          <div>
            <h6 className='text-base text-slate-600 font-medium'>Users</h6>
            <h3 className='text-2xl font-semibold'>14</h3>
          </div>
          <div className='w-7 h-7 bg-white flex justify-center items-center p-[18px] rounded-full'>
            <PersonIcon />
          </div>
        </div>
        <div className='text-red-500'>
          <ArrowDownwardIcon />2.3% <span className='text-slate-900 ml-2'>Since last month</span>
        </div>
      </div>
      <div className='h-[120px] px-4 py-3 bg-rose-100 rounded-lg relative flex flex-col justify-between'>
        <div className='flex justify-between'>
          <div>
            <h6 className='text-base text-slate-600 font-medium'>Performance</h6>
            <h3 className='text-2xl font-semibold'>49.9%</h3>
          </div>
          <div className='w-7 h-7 bg-white flex justify-center items-center p-[18px] rounded-full'>
            <EqualizerIcon />
          </div>
        </div>
        <div className='text-green-500'>
          <ArrowUpwardIcon />24.7% <span className='text-slate-900 ml-2'>Since last month</span>
        </div>
      </div>
    </section>
  )
}

export default HeroCard