import React from 'react'
import { BrowserRouter , useNavigate } from 'react-router-dom' 

const Hero = (  ) => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="main w-[375px] flex flex-col m-auto ">
        <div className='relative h-[100vh] flex flex-col justify-end p-4 pb-5 mobile-up'>
          <h1 className=' font-bold text-xl'>Welcome to PopX</h1>
          <p className=' text-sm text-gray-800 w-60 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <div className="btns flex flex-col gap-2 pt-5">
            <button onClick={ () => navigate('/login')} className=' cursor-pointer bg-violet-600 font-semibold text-white py-2 px-4 rounded'>Login</button>
            <button onClick={ () => navigate('/register')} className=' cursor-pointer bg-violet-300 font-semibold text-black py-2 px-4 rounded'>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
