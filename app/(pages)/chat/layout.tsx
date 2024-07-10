import React from 'react'

import { Navigation } from '@/app/components/chat/Navigation'
import { Header } from '@/app/components/ui/Header'

export default function Layout({children}: React.PropsWithChildren) {
  return (
    <section className="flex w-full h-full">
      <Navigation />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </section>
  )
}
