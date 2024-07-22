import { ImageIcon, Languages, Mail, MessageSquareText, Mic, PieChartIcon } from 'lucide-react'
import React from 'react'

interface NewChatActionProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
}

const NewChatAction = (props: NewChatActionProps) => {
  const {Icon, title} = props;
  return (
    <div className='flex items-center gap-3 bg-white p-6 rounded-md hover:bg-gray-20 transition-all cursor-pointer pr-20'>
      <span className='p-2 bg-gray-30 rounded-md'>
      <Icon width={30} height={30} className='text-accent-blue'/></span>
      <span className='text-sm'>{title}</span>
    </div>
  )
}

export const NewChat = () => {
  return (
    <div className='p-8'>
      <h1 className='text-center text-2xl'>Initiat a New Chat</h1>
      <p className='text-center text-gray-300'>Unlock the Power of AI Dialogue</p>
      <div className='grid grid-cols-3 gap-3 mt-8'>
        <NewChatAction Icon={Languages} title='Languange Translation'/>
        <NewChatAction Icon={Mail} title='Email Composition and Sending'/>
        <NewChatAction Icon={MessageSquareText} title='Meeting and Event Scheduling'/>
        <NewChatAction Icon={PieChartIcon} title='Analytics and Forecasting'/>
        <NewChatAction Icon={ImageIcon} title='Text Extraction from Images'/>
        <NewChatAction Icon={Mic} title='Text Recognition from Voice Messages'/>
      </div>
    </div>
  )
}
