import React from 'react'

import { MessageContent } from '@/app/components/chat/MessageContent'
import { MessageDetailsProvider } from '@/app/context/MessageDetailsContext'

export default function Page() {
  return (
    <MessageDetailsProvider>
      <MessageContent />
    </MessageDetailsProvider>
  )
}
