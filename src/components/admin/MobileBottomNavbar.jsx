import { FaHome } from "react-icons/fa"
import { ImExit } from "react-icons/im"
import { IoNewspaperOutline } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"


const MobileBottomNavbar = () => {
  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.clear()
    navigate('/')
  }

  return (
    <ul className='lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6 p-4 md:py-6 md:px-8 bg-gray-700 rounded-full shadow-md'>
      <li>
        <Link to='/admin'>
          <IoNewspaperOutline className="size-7 md:size-10 text-white" />
        </Link>
      </li>

      <li>
        <Link to='/'>
          <FaHome className="size-7 md:size-10 text-white" />
        </Link>
      </li>
      
      <li>
        <button onClick={logout} className='block text-gray-400'>
          <ImExit className="size-7 md:size-10" />
        </button>
      </li>
    </ul>
  )
}

export default MobileBottomNavbar