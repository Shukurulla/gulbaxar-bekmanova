import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { url } from '../utils/Url';

const Login = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    toast('Please wait...')
    const res = await fetch(`${url}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              'email': data.email,
              'password': data.password
            })
        });
      
        const response = await res.json();

        if (response.success) {
          window.localStorage.setItem('token', response.token)
          navigate('/admin')
        } else {
          toast.error("Login or password is wrong!")
        }
  }

  return (
    <>
      <form className='flex flex-col p-4 lg:p-0 max-w-sm mx-auto my-20 gap-2' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col mb-2 gap-2'>
              <label htmlFor="email">Email</label>
              <input {...register("email")} className='ring-1 ring-inset ring-gray-300 rounded-md border-0 focus:ring-indigo-600 shadow-sm py-1.5 px-2 outline-none' type="email" id='email' required />
          </div>
          <div className='flex flex-col mb-2 gap-2'>
              <label htmlFor="password">Password</label>
              <input {...register("password")} className='ring-1 ring-inset ring-gray-300 rounded-md border-0 focus:ring-indigo-600 shadow-sm py-1.5 px-2 outline-none' type="password" id='password' required />
          </div>
          <button className='bg-indigo-600 rounded-md text-white p-1.5 font-semibold'>Login to dashboard</button>
      </form>

      <Toaster />
    </>
  )
}

export default Login