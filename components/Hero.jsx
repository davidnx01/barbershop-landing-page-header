import React from 'react'
import { FaFacebook, FaTiktok } from "react-icons/fa"

const Hero = () => {
  return (
    <>
    <div className='max-w-[1720px] w-[100%] mx-auto mt-20'>
      <h1 className='light_active_color text-7xl'>THE BARBERSHOP</h1>
      <h2 className='active_color font-bold text-3xl mt-6'>EXPERT HAIRCUTS AND GROOMING SERVICE</h2>
      <p className='light_active_color text-lg max-w-[620px] w-[100%] mt-6 opacity-70 p_lh font-light'>At The Finest Barbershop, we offer a wide 
      range of professional hair cutting and grooming 
      services for men. Our experienced barbers use 
      the latest techniques and tools to give you the 
      perfect look. Whether you're in need of a classic 
      haircut, straight razor shave, or beard trim, 
      we've got you covered.</p>
      <div className='flex flex-row gap-6 items-center mt-12'>
        <button className='active_bg py-6 px-8 light_active_color text-lg font-bold'>BOOK A HAIRCUT</button>
        <button className='bg-transparent active_border text-lg font-bold py-6 px-8 active_color'>START SHOPPING</button>
      </div>

      <div className='flex flex-row items-center gap-6 mt-10 light_active_color'>
        <div className='active_bg h-10 w-10 rounded-full flex items-center justify-center cursor-pointer'>
          <FaTiktok size={20} />
        </div>

        <div className='active_bg h-10 w-10 rounded-full flex items-center justify-center cursor-pointer'>
          <FaFacebook size={20} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero