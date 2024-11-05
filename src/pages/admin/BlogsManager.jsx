import { Pagination } from '@mui/material';
import { useEffect, useRef, useState } from 'react'
import BlogCard from '../../components/admin/BlogCard';
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import DataNotFoundImg from '../../assets/data-not-found.jpg'
import toast, { Toaster } from 'react-hot-toast';
import { url } from '../../utils/Url';
import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher';


const BlogsManager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageQty, setPageQty] = useState();
  const itemsPerPage = 3;
  const [search, setSearch] = useState('')
  const inputRef = useRef()
  const [loading, setLoading] = useState(true)
  const token = window.localStorage.getItem('token')
  const navigate = useNavigate()
  const [refreshData, setRefreshData] = useState(false)

  const {data, error, isLoading} = useSWR(`${url}/api/blogs/active`, fetcher)
  
  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(inputRef.current.value.toLowerCase())
    setCurrentPage(1)
  }

  useEffect(() => {
    setPageQty(Math.ceil(Array.isArray(data) && data.filter(item => search === '' ? item : item.title.toLowerCase().includes(search)).length / itemsPerPage))
  }, [search, data]);

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this item?')) {
      toast('Please wait...')
      const response = await fetch(`${url}/api/blog/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        setRefreshData(prev => !prev)
      }
    }
  }

  const handleEdit = (id) => {
    navigate(`edit-post/${id}`)
  }

  return (
    <div className='grow pt-12'>
      <Toaster />
      <div className='max-w-[90%] mx-auto'>
        <div className='flex justify-between items-center lg:items-stretch mb-10'>
          <form className='flex gap-2' onSubmit={handleSearch}>
            <input ref={inputRef} className='border border-gray-300 rounded-md p-2.5' type="text" placeholder='Search blogs' />
            <button className='hidden lg:block bg-blue-100 p-4 rounded-md'><CiSearch /></button>
          </form>
          <Link to='create-post' className='size-10 lg:size-auto bg-green-500 text-white rounded-lg shadow-md font-bold flex justify-center items-center'>
            <span className='hidden lg:inline lg:px-4 lg:py-2'>Create +</span>
            <span className='lg:hidden text-xl'>+</span>
          </Link>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 lg:justify-between'>
          {
            error ? <div className='text-center text-red-500 text-xl w-full'>Something went wrong.</div> : isLoading ? (
              Array(itemsPerPage).fill(0).map((item, index) => (
                <div key={index} className='animate-pulse lg:w-[30%]'>
                  <div className="h-60 bg-gray-400"></div>
                  <div className='mt-4 flex flex-col gap-2 p-4'>
                    <p className='h-6 mb-6 bg-gray-400 rounded-full'></p>
                    <p className='h-4 bg-gray-400 rounded-full'></p>
                    <p className='h-4 bg-gray-400 rounded-full'></p>
                    <p className='h-4 bg-gray-400 rounded-full'></p>
                    <p className='h-4 bg-gray-400 rounded-full'></p>
                    <p className='h-4 bg-gray-400 rounded-full'></p>
                    <p className='h-4 bg-gray-400 self-end w-1/2 rounded-full'></p>
                  </div>
                </div>
              ))
            ) : (
              Array.isArray(data) && data.filter(item => search === '' ? item : item.title.toLowerCase().includes(search)).slice(itemsPerPage * (currentPage - 1), currentPage * itemsPerPage).map((item, i) => (
                <BlogCard key={i} image={item.image} title={item.title} body={item.body} uploadedDate={item.created_at}>
                  <div className="lg:hidden lg:group-hover/item:flex flex absolute top-2 md:top-4 lg:top-2 right-2 md:right-4 lg:right-2 gap-2 md:gap-4 lg:gap-2">
                    <button className="bg-white p-2 rounded-md shadow-md" title='Edit' onClick={() => handleEdit(item.id)}>
                      <MdModeEdit className='size-5 md:size-10 lg:size-fit' />
                    </button>
                    <button className="bg-white p-2 rounded-md shadow-md" onClick={() => handleDelete(item.id)}>
                      <MdDelete className='size-5 md:size-10 lg:size-fit' />
                    </button>
                  </div>
                </BlogCard>
              ))
            )
          }
          {!isLoading && (Array.isArray(data) && data.filter(item => search === '' ? item : item.title.toLowerCase().includes(search)).length === 0 && <img src={DataNotFoundImg} alt="data-not-found" />)}
        </div>
        <div className="flex justify-center pt-4 mb-20">
          <Pagination count={pageQty} onChange={(_, num) => setCurrentPage(num)} showFirstButton showLastButton />
        </div>
      </div>
    </div>
  )
}

export default BlogsManager