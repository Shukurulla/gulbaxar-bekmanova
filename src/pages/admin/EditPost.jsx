import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../../components/admin/QuillToolbar";
import "react-quill/dist/quill.snow.css";
import { MdImage } from "react-icons/md";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../utils/Url";

export const EditPost = () => {
  const [image, setImage] = useState('')
  const [post, setPost] = useState({ value: '' });
  const { handleSubmit } = useForm()
  const maxImgSizeMb = 2;
  const fileInput = useRef()
  const title = useRef()
  const editorInput = window.document.querySelector('.ql-container')
  const token = window.localStorage.getItem('token')
  const navigate = useNavigate()
  const {id} = useParams()
  const [imageFile, setImageFile] = useState()

  useEffect(() => {
    fetch(`${url}/api/blog/${id}`)
    .then(res => res.json())
    .then(json => {
      title.current.value = json.blog.title
      setImage(json.blog.image)
      
      setPost({value: json.blog.body});
    });
  }, [])
  
  const handleChange = value => {
    setPost({ value });
    editorInput.style.borderColor = 'inherit'
  };

  
  const handleImage = (e) => {
    const file = e.target.files[0]
    
    const fileExtension = file.name.split('.').reverse()[0].toLowerCase()
    const allowedFileExtensions = ['jpe', 'jpg', 'jpeg', 'gif', 'png', 'bmp', 'ico', 'svg', 'svgz', 'tif', 'tiff', 'ai', 'drw', 'pct', 'psp', 'xcf', 'psd', 'raw', 'webp', 'heic']

    if (file.size > maxImgSizeMb * 1024 ** 2) {
      toast.error(`File size should not exceed ${maxImgSizeMb} MB!`)
    } else if (!allowedFileExtensions.find(extension => extension === fileExtension)) {
      toast.error('Only images can be uploaded.')
    } else {
      setImage(URL.createObjectURL(file))
      setImageFile(file)
    }
  }
  
  const onSubmit = () => {
    if (!image) {
      toast.error('Image must be uploaded!')
      fileInput.current.style.borderColor = 'red';
    } else if (!post.value.replace(/<(.|\n)*?>/g, '').trim().length) {
        toast.error('A post must be written!')
        editorInput.style.borderColor = 'red'
    } else {
      const fetchData = async () => {
        toast('Please wait...')
        const data = new FormData()
        data.set('title', title.current.value)
        data.set('body', post.value)
        data.set('image', imageFile)
        const res = await fetch(`${url}/api/blog/update/${id}?_method=put`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${token}`
              },
              body: data
          });
  
          
          if (res.ok) {
            navigate('/admin')
          }
      }
      fetchData()
    }
  };

  return (
    <>
      <form className="mx-auto p-4 lg:px-12 lg:py-10 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className='relative h-96 group/item border'>
          <img src={image} alt="thumbnail" className="mx-auto object-contain h-full" />
            <label htmlFor="dropzone-file" className="absolute top-0 size-full invisible group-hover/item:visible flex flex-col items-center justify-center bg-gray-700/50 backdrop-blur-sm cursor-pointer border-2 border-gray-500 border-dashed rounded-lg bg-gray-50">
              <div className="flex flex-col items-center justify-center text-white">
                <MdImage className="size-16 mb-4" />
                <p className="text-sm mb-2 text-center"><span className="font-semibold">Click to change to a new image</span> or drag and drop</p>
                <p className="text-xs">JPG, PNG, SVG, or GIF</p>
              </div>
              <input type="file" accept="image/*" id="dropzone-file" className="hidden" onChange={handleImage} />
            </label>
        </div>
        <div>
          <label htmlFor="title" className='block mb-2 text-sm font-medium text-gray-900'>Post title</label>
          <input ref={title} type="text" id='title' name='title' className='border border-gray-300 rounded-lg p-2.5 text-gray-900 w-full' required />
        </div>
        <div>
          <EditorToolbar />
          <ReactQuill
            theme="snow"
            value={post.value}
            onChange={handleChange}
            placeholder={"Write something awesome..."}
            modules={modules}
            formats={formats}
            className="h-96"
            />
        </div>
        <button className="bg-green-500 px-4 py-2 text-white rounded-md self-end shadow-md">Update</button>
      </form>
      <Toaster />
    </>
  );
};

export default EditPost