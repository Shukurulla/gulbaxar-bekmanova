import { useParams } from 'react-router-dom'
import { url } from '../utils/Url';
import { fetcherOneBlog } from '../helpers/fetcher';
import useSWR from 'swr';

const Post = () => {
    let {id} = useParams()
    const {data, isLoading} = useSWR(`${url}/api/blog/${id}`, fetcherOneBlog)

    if (isLoading) return (
      <div className='max-w-[768px] mx-auto p-4 lg:p-0 lg:py-12 animate-pulse'>
        <div className="h-96 bg-gray-400"></div>
        <div className='mt-4 flex flex-col gap-2'>
          <p className='h-6 mb-6 bg-gray-400 rounded-full'></p>
          <p className='h-4 bg-gray-400 rounded-full'></p>
          <p className='h-4 bg-gray-400 rounded-full'></p>
          <p className='h-4 bg-gray-400 rounded-full'></p>
          <p className='h-4 bg-gray-400 rounded-full'></p>
          <p className='h-4 bg-gray-400 rounded-full'></p>
        </div>
      </div>
    )

    return (
      <div className='max-w-[768px] mx-auto p-4 lg:p-0 lg:py-12'>
        <div className='w-full'>
          <img src={data?.image} alt="thumbnail" className='w-full' />
        </div>
        <p className='font-bold pt-4 md:text-xl lg:text-3xl'>{data && data.title}</p>
        <div dangerouslySetInnerHTML={{__html:data && data.body}} />
      </div>
    )
}

export default Post