
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from '@/hooks/useAuth';

interface Inputs {
  email: string
  password: string
}

const Login = () => {

  const [login, setLogin] = useState(false);
  const { signIn, signUp} = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    console.log(data);
    if(login) {
      await signIn(data.email, data.password)
    } else {
      await signUp(data.email, data.password)
    }
  }

  return (
    <div className='relative w-screen h-screen flex flex-col bg-black md:items-center md:justify-center md:bg-transparent '>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href="/favicon.ico"/>
      </Head>
      <Image
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt='background-image'
        fill={true}
        className=' object-cover -z-10 !hidden opacity-60 sm:!inline'
      />
      <img 
        src="https://rb.gy/ulxxee"
        className='absolute left-4 top-4 cursor-pointer object-contain md:top-6 md:left-10'
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
      >
        <h1 className='text-4xl font-semibold'>Sign In</h1>
        <div className='space-y-4'>
          <label className='inline-block w-full'>
            <input 
              type='email' 
              placeholder='Email'
              className={`input ${errors.password && "border-b-2 border-orange-500"}`}
              {...register("email", {required: true})}
            />
            {errors.email && (
              <p className='p-1 text-[13px] font-light text-orange-500'>
                Please enter a valid email.
              </p>
            )}
          </label>

          <label className='inline-block w-full'>
            <input
              type='password'
              placeholder='Password'
              className={`input ${errors.password && "border-b-2 border-orange-500"}`}
              {...register("password", {required: true})}
            />
            {errors.password && (
            <p className='p-1 text-[13px] font-light text-orange-500'>
              Your password must contain between 4 and 60 characters.
            </p>
            )}
          </label>
        </div>
        <button 
          type='submit'
          onClick={() => setLogin(true)}
          className='w-full rounded bg-[#E50914] py-3 font-semibold'
        >
          Sign In
        </button>
        <div className='text-[gray]'>
          New to Netflix?{' '}
          <button 
            type="submit"
            onClick={() => setLogin(false)}
            className='cursor-pointer text-white hover:underline'
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
