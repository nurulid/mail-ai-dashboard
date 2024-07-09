"use client"

import { AreaChart, CalendarMinus2, ChevronLeft,CircleHelp, FileText, LogOut, Mail, MessageCircleMore, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { ComponentProps } from 'react'

import { useSidebar } from '../context/SidebarContext';
import { Tooltip } from './ui/Tooltip';

interface SidebarLinkProps extends ComponentProps<typeof Link> {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const SidebarLink = (props: SidebarLinkProps) => {
  const {Icon, className = "", title, ...linkProps} = props;
  const {isSidebarShrink} = useSidebar();
  const pathname = usePathname();
  return (
    <Link
      data-active={pathname === props.href}
      className={`text-gray-200 flex items-center gap-3 py-[10px] px-3 rounded-md hover:bg-gray-500 transition-all data-[active=true]:text-white data-[active=true]:bg-gray-500 ${className}`}
      {...linkProps}
    >
      {isSidebarShrink ? (
        <Tooltip content={title} side='right'>
          <Icon width={24} height={24} />
        </Tooltip>
      ):(
        <>
          <Icon width={24} height={24} />
          {title}
        </>
      )}
    </Link>
  )
}

export const Sidebar = () => {
  const {isSidebarShrink, toggleSidebar} = useSidebar();

  return (
    <aside className={[
      "bg-gray-800 h-screen flex flex-col relative transition-all",
      isSidebarShrink ? "w-[88px] p-5" : "w-[278px] p-10"
      ].join(" ")}>
      {isSidebarShrink ? (
        <Image src="logo-icon.svg" width={44} height={44} alt='Logo'/>
      ):(
        <Image src="logo-jcd-ai.svg" width={300} height={32} alt='Logo'/>
      )}
      <div className='mt-14'>
        <nav className="space-y-[10px]">
          <SidebarLink href="/chat" Icon={MessageCircleMore} title='Chat' />
          <SidebarLink href="/" Icon={AreaChart} title='Income' />
          <SidebarLink href="/schedules" Icon={CalendarMinus2} title='Schedules' />
          <SidebarLink href="/mail" Icon={Mail} title='Mail' />
          <SidebarLink href="/documents" Icon={FileText} title='Documents' />
        </nav>
        <nav className="mt-6 pt-6 border-t border-gray-400">
          <SidebarLink href="/settings" Icon={Settings} title='Settings' />
        </nav>
      </div>
      <nav className='mt-auto space-y-[10px]'>
        <SidebarLink href="/help" Icon={CircleHelp} title='Help' />
        <SidebarLink href="/logout" Icon={LogOut} className='text-red-500' title='Logout account' />
      </nav>
      <button onClick={toggleSidebar} className={[
        "bg-gray-500 text-white border border-white rounded-md p-1 absolute -right-[14px] top-1/2 -translate-y-1/2",
        isSidebarShrink ? "rotate-180 transition-all" : ""
        ].join(" ")}>
        <ChevronLeft size={18} />
      </button>
    </aside>
  )
}
