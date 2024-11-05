import { Link, useLocation, useNavigate } from 'react-router-dom'
import { RiDashboard3Line } from 'react-icons/ri'
import { IoNewspaperOutline } from 'react-icons/io5'
import { ImExit } from 'react-icons/im'
import { FaHome } from 'react-icons/fa'

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.clear()
    navigate('/')
  }
  
  return (
    <aside className='hidden sticky top-0 h-screen bg-blue-900 min-w-64 p-4 lg:flex flex-col gap-4'>
      <div className='flex items-center gap-2 text-white p-2'>
        <RiDashboard3Line size={40} />
        <span className='text-xl font-bold'>Dashboard</span>
      </div>

      <nav className='grow flex flex-col justify-between'>
        <ul className='flex flex-col gap-4'>
          <li>
            <Link to='/admin' className='flex items-center gap-2 text-white hover:bg-gray-500 rounded-lg p-2'>
              <IoNewspaperOutline size={25} />
              <span className='font-bold'>Blogs</span>
            </Link>
          </li>
          <li>
            <Link to='/' className='flex items-center gap-2 text-white hover:bg-gray-500 rounded-lg p-2'>
              <FaHome size={25} />
              <span className='font-bold'>Back to Home Page</span>
            </Link>
          </li>
        </ul>

        <ul className='flex flex-col gap-4'>
          <li className='hover:bg-gray-500 rounded-lg'>
            <button onClick={logout} className='w-full flex items-center gap-2 text-white hover:bg-gray-500 rounded-lg p-2'>
              <ImExit size={25} />
              <span className='font-bold'>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar