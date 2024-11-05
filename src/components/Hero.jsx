import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import bioImg from '../assets/bio.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-center items-center gap-[5rem] h-screen lg:-mt-20'>
        <div className='rounded-full overflow-hidden size-[200px] md:size-[300px] lg:size-[400px]'>
            <img src={bioImg} alt="Profile-image" />
        </div>
        <div className='font-bold flex flex-col gap-3 items-center'>
            <p className=' text-center text-gray-500'>Hello, I'm</p>
            <h1 className='text-5xl text-center'>Gulbaxar Begdullaevna</h1>
            <p className='text-gray-500 text-3xl text-center'>PhD</p>
            <div className='flex gap-3 mt-2'>
                {/* <Link to='my-projects' className='p-4 border-2 border-neutral-800 rounded-full text-neutral-800'>My Projects</Link> */}
                <button className='p-4 border-2 border-neutral-800 rounded-full text-neutral-800 cursor-pointer'>My Projects</button>
                <Link to='about-me' className='p-4 border-2 border-neutral-800 rounded-full bg-neutral-800 text-white'>About Me</Link>
            </div>
            <div>
                <ul className='flex gap-4 mt-3'>
                    <li>
                        <a href="#">
                            <FaFacebook size={25} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaTwitter size={25} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaYoutube size={25} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Hero