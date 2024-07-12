import { ImageIcon, Mic, Paperclip, SendHorizonal } from 'lucide-react'
import React from 'react'

export const MessageInput = () => {
  return (
    <div className='flex gap-4 justify-between items-center py-[10px] px-[30px] bg-gray-30 text-gray-200 rounded-md'>
      <div className='flex flex-1 gap-1 items-center'>
        <button className='hover:text-gray-500 transition-all'><Mic size={24}/></button>
        <input type='text' placeholder='Type Message...' className='w-full py-[10px] px-2 bg-gray-30 text-gray-800 placeholder:text-gray-200 focus:outline-none'/>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center gap-3 pr-4 mr-6 border-r-2 border-gray-50'>
          <button className='hover:text-gray-500 transition-all'><ImageIcon size={24}/></button>
          <button className='hover:text-gray-500 transition-all'><Paperclip size={24}/></button>
        </div>
        <button><span className='size-[44px] rounded-full flex items-center justify-center bg-accent-blue hover:opacity-70 transition-all text-white'><SendHorizonal size={24} /></span></button>
      </div>
    </div>
  )
}
