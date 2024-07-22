import React, { PropsWithChildren } from 'react'

export const PageSidebar = (props: PropsWithChildren) => {
  const {children} = props;
  return (
    <div className='w-[353px] h-screen overflow-hidden flex flex-col pt-3'>
      {children}
    </div>
  )
}
