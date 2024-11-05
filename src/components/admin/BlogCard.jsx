import { LuCalendar } from "react-icons/lu"


const BlogCard = ({image, title, body, uploadedDate, children}) => {
  return (
    <div className="group/item relative lg:max-w-[30%]">
      <div className="h-min">
          <img className="h-full object-contain mx-auto" src={image} alt="thumbnail" />
      </div>
      <div className="content">
        <p className='font-bold mb-6 mt-2 md:text-xl lg:text-lg line-clamp-3'>{title}</p>
        {body && <div className='line-clamp-5' dangerouslySetInnerHTML={{__html:body}} />}
        <p className='lg:pt-2 flex items-center gap-2 justify-end text-gray-500'><LuCalendar />{uploadedDate.split('T')[0].replaceAll('-', '.').split('.').reverse().join('.')}</p>
      </div>

      {children}
    </div>
  )
}

export default BlogCard