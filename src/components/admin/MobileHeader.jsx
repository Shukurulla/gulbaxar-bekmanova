import { RiDashboard3Line } from 'react-icons/ri'

const MobileHeader = () => {
  return (
    <div className='lg:hidden sticky top-0 z-10 flex items-center gap-2 justify-center py-2 text-white bg-blue-900'>
        <RiDashboard3Line size={40} />
        <span className='text-xl font-bold'>Dashboard</span>
    </div>
  )
}

export default MobileHeader