import { Outlet } from 'react-router-dom'
import Sidebar from '../components/admin/Sidebar'
import MobileHeader from '../components/admin/MobileHeader'
import MobileBottomNavbar from '../components/admin/MobileBottomNavbar'

const AdminLayout = () => {
  return (
    <div className='lg:flex'>
      <Sidebar />
      <MobileHeader />
      <Outlet />
      <MobileBottomNavbar />
    </div>
  )
}

export default AdminLayout