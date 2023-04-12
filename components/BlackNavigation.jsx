import React from 'react'
import { HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2"

const BlackNavigation = () => {
  return (
    <div className="dark_bg w-full flex items-center justify-center py-5 px-4">
        <div className="max-w-[1720px] w-[100%] flex justify-between items-center">
          <div>
            <p className='light_active_color font-bold'>
                <span className='active_color mr-6'>WE ARE OPEN</span> 
                7 DAYS A WEEK
            </p>
          </div>

          <div className='flex flex-row items-center gap-10 light_active_color'>
            <div className='flex flex-row items-center gap-4'>
              <HiOutlineMapPin color='var(--active)' size={28} />
              <p>9400 PENATIBUS ROAD</p>
            </div>

            <div className='flex flex-row items-center gap-4'>
              <HiOutlinePhone color='var(--active)' size={22} />
              <p>1-366-253-7950</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BlackNavigation