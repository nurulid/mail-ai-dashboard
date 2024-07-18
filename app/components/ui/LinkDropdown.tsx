"use client"

import { ChevronDown, Circle, Folder, Lock } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ComponentProps, PropsWithChildren, useState } from 'react'

interface LinkDropdownProps {
  title: string;
  iconColor?: string;
  isLock?: boolean;
}

export const LinkDropdown = (
  props: PropsWithChildren<LinkDropdownProps>
) => {
  const { iconColor, title, isLock, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div className="mb-2">
      <div
        className="cursor-pointer flex justify-between items-center px-3 py-[10px] mb-2"
        onClick={toggleNav}
      >
        <span>
          <Folder
            size={30}
            className={`inline-block rounded p-[6px] text-white mr-3 ${
              iconColor ? iconColor : "bg-gray-100"
            }`}
          />{" "}
          {title}
        </span>
        <span>
          {isLock && (
            <Lock
              size={25}
              className="inline-block p-[6px] bg-gray-30 rounded mr-3"
            />
          )}
          <ChevronDown
            size={18}
            className={`${
              isOpen ? "rotate-180" : ""
            } text-gray-300 transition-all inline-block`}
          />
        </span>
      </div>
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } transition-all flex-col gap-1 border-l-2 pl-3 ml-8 text-gray-300 text-sm`}
      >
        {children}
      </nav>
    </div>
  );
};

interface LinkDropdownItemProps extends ComponentProps<typeof Link> {
  title: string;
}

export const LinkDropdownItem = (props: LinkDropdownItemProps) => {
  const { title, ...linkProps } = props;
  const pathname = usePathname();

  return (
    <Link
      data-active={pathname === props.href}
      className="py-2 px-3"
      {...linkProps}
    >
      <Circle size={10} className="inline-block mr-3" /> {title}
    </Link>
  );
};
