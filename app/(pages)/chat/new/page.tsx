"use client"

import { NewChat } from "@/app/components/chat/NewChat";

export default function Page() {
  return (
    <div>
      <NewChat />
    </div>
    // <motion.div className='w-full h-full flex justify-between items-center'
    // variants={{
    //   hidden: { opacity: 0, x: -150, scale: 0.2 },
    //   visible: { opacity: 1, x: 0, scale: 1 },
    // }}
    // initial="hidden"
    // animate="visible"
    // // exit="hidden"
    // >
    //   <Images />
    // </motion.div>
  )
}
