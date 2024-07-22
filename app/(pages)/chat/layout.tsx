import React from 'react'

import { ChatLayout } from '@/app/components/layout/ChatLayout'

export default function Layout({children}: React.PropsWithChildren) {
  return (
    <ChatLayout>{children}</ChatLayout>
        
  )
}
