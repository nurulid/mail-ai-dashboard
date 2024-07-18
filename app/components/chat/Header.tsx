"use client"

import { ChevronLeft, EllipsisVertical, Search, Star } from 'lucide-react'
import React from 'react'

import { useMessageDetails } from '@/app/context/MessageDetailsContext'

export const Header = () => {
  const {isDetailsOpen, toggleDetails} = useMessageDetails();
  return (
    <div className='py-[10px] px-[30px] flex justify-between items-center flex-wrap gap-2 shadow bg-white rounded-md sticky top-0 right-0 left-0 z-10'>
      <h2>Upcoming client meeting</h2>
      <div className='flex items-center gap-4'>
        <div className='text-gray-200 flex gap-4 items-center pr-6 border-r-2'>
          <button className='button-icon'><Star size={20}/></button>
          <button className='button-icon'><Search size={20}/></button>
          <button className='button-icon'><EllipsisVertical size={20}/></button>
        </div>
        <button onClick={toggleDetails} className={[
          'size-[34px] bg-gray-30 rounded-full transition-all',
          isDetailsOpen ? "rotate-180" : ""
          ].join(" ")}><ChevronLeft size={20} className='mx-auto'/></button>
      </div>
    </div>
  )
}
