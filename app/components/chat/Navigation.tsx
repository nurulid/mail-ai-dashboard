"use client";

import { Archive, PlusCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, PropsWithChildren } from "react";

import { PageSidebar } from "../PageSidebar";
import { LinkBtn } from "../ui/Button";
import { LinkDropdown, LinkDropdownItem } from "../ui/LinkDropdown";
import { SearchInput } from "../ui/SearchInput";

const navigationList = [
  {
    title: "Upcoming client meeting",
    time: "11:02",
    url: "/chat",
  },
  {
    title: "Company performance statisfy",
    time: "June 12",
    url: "/",
  },
  {
    title: "Effective Communication in Virtual Teams",
    time: "June 17",
    url: "/mail",
  },
  {
    title: "Planning the Next IT Project",
    time: "June 17",
    url: "/c",
  },
];

interface NavigationGroupProps {
  title?: string;
}

export const NavigationGroup = (
  props: PropsWithChildren<NavigationGroupProps>
) => {
  const { title, children } = props;
  return (
    <div className="pt-7 mt-6 border-t-2">
      {title && (
        <h3 className="text-gray-300 text-xs uppercase font-medium mb-5">
          {title}
        </h3>
      )}
      <nav className="max-h-[30vh] overflow-y-auto">{children}</nav>
    </div>
  );
};

interface NavigationLinkProps extends ComponentProps<typeof Link> {
  title: string;
  time: string;
}

const NavigationLink = (props: NavigationLinkProps) => {
  const { title, time, ...linkProps } = props;
  const pathname = usePathname();
  return (
    <Link
      {...linkProps}
      data-active={pathname === props.href}
      className="py-[10px] px-4 flex justify-between items-center rounded-md data-[active=true]:bg-gray-30 mb-2 last:mb-0 hover:opacity-50 transition-all"
    >
      <span className="truncate pr-2">{title}</span>
      <span className="text-gray-300 text-xs whitespace-nowrap">{time}</span>
    </Link>
  );
};

export const NavigationFolder = () => {
  return (
    <Link
      href="/"
      className="flex justify-between items-center px-3 py-[10px] hover:opacity-70 transition-all"
    >
      <span>
        <Archive
          size={35}
          className="inline-block rounded p-2 bg-gray-30 text-gray-300 mr-3"
        />{" "}
        Archive
      </span>
      <span className="bg-gray-30 text-gray-300 text-xs size-7 text-center leading-7 rounded-full">
        13
      </span>
    </Link>
  );
};

export const Navigation = () => {
  return (
    <PageSidebar>
      <div className="px-6">
        <SearchInput />
        <div className="mt-8">
          <h1 className="text-2xl font-medium">Your Chats</h1>
          <NavigationGroup title="Recent">
            {navigationList.map((nav, index) => {
              return (
                <NavigationLink
                  key={index}
                  title={nav.title}
                  time={nav.time}
                  href={nav.url}
                />
              );
            })}
          </NavigationGroup>
          <NavigationGroup title="Folders">
            <LinkDropdown
              title="Budget 2024"
              iconColor="bg-accent-yellow"
              isLock
            >
              <LinkDropdownItem href="" title="Budget 1" />
              <LinkDropdownItem href="" title="Budget 2" />
              <LinkDropdownItem href="" title="Budget 3" />
            </LinkDropdown>
            <LinkDropdown title="Management" iconColor="bg-accent-dark-blue">
              <LinkDropdownItem href="" title="Programmers" />
              <LinkDropdownItem href="" title="UI/UX" />
            </LinkDropdown>
            <LinkDropdown title="Clients">
              <LinkDropdownItem href="" title="Client 1" />
              <LinkDropdownItem href="" title="Client 2" />
              <LinkDropdownItem href="" title="Client 3" />
            </LinkDropdown>
          </NavigationGroup>
          <NavigationGroup>
            <NavigationFolder />
          </NavigationGroup>
        </div>
      </div>
      <div className="mt-auto text-center py-6 border-t-2  ">
        <LinkBtn href="/chat/new" className="mx-auto">
          <PlusCircle size={24} /> New chat
        </LinkBtn>
      </div>
    </PageSidebar>
  );
};
