import { ChevronLeft, EllipsisVertical, Search, Star } from 'lucide-react'
import React from 'react'

export const Header = () => {
  return (
    <div className='py-[10px] px-[30px] flex justify-between items-center flex-wrap gap-2 shadow bg-white rounded-md'>
      <h2>Upcoming client meeting</h2>
      <div className='flex items-center gap-4'>
        <div className='text-gray-200 flex gap-4 items-center pr-6 border-r-2 border-gray-50'>
          <button><Star size={20}/></button>
          <button><Search size={20}/></button>
          <button><EllipsisVertical size={20}/></button>
        </div>
        <button className='size-[34px] bg-gray-30
         rounded-full'><ChevronLeft size={20} className='mx-auto'/></button>
      </div>
    </div>
  )
}
