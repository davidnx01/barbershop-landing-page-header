import { navLinks } from '@/constants/navLinksConsts'
import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

const NavigationBar = () => {
  return (
    <div className='w-full py-8 flex items-center justify-center'>
        <div className='max-w-[1720px] w-[100%] flex flex-row items-center justify-between font-bold light_active_color text-sm'>
            <img src="/images/logo.png" alt="Logo" />
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.id} className='inline-block mx-6 opacity-70 hover:opacity-100 transition duration-200'>
                            <a href={item.link}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            <div className='flex flex-row items-center gap-2'>
                <div className='flex flex-row items-center gap-4'>
                    <HiOutlineShoppingBag color='var(--light_active)' className='cursor-pointer' size={20}/>
                    <p className='cursor-pointer'>CARD</p>
                </div>
                    <span className='h-6 w-6 rounded-full active_bg flex items-center justify-center cursor-pointer'>
                        0
                    </span>
            </div>
        </div>
    </div>
  )
}

export default NavigationBar