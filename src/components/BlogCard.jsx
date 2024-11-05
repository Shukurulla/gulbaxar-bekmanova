import { LuCalendar } from "react-icons/lu"
import { Link } from "react-router-dom"


const BlogCard = ({id, image, title, body, uploadedDate}) => {
  return (
    <div className="group/item">
      <Link to={`/post/${id}`}>
        <div className="h-min">
          <img className="h-full object-contain mx-auto" src={image} alt="thumbnail" />
        </div>
        <div className="content">
          <p className='group-hover/item:text-indigo-800 transition ease-in-out duration-150 font-bold mb-6 mt-2 md:text-xl lg:text-lg line-clamp-2'>{title}</p>
          {body && <div className='line-clamp-5' dangerouslySetInnerHTML={{__html:body}} />}
          {uploadedDate && <p className='lg:pt-2 flex items-center gap-2 justify-end text-gray-500'><LuCalendar />{uploadedDate.split('T')[0].replaceAll('-', '.').split('.').reverse().join('.')}</p>}
        </div>
      </Link>
    </div>
  )
}

export default BlogCard