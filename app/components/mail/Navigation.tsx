"use client"

import { File, Mail, Pencil, Send, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

import { NavigationFolder, NavigationGroup } from "../chat/Navigation";
import { PageSidebar } from "../PageSidebar";
import { LinkBtn } from "../ui/Button";
import { SearchInput } from "../ui/SearchInput";

interface FolderMenuProps extends ComponentProps<typeof Link> {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  count: number;
  unread?: number;
}

const FolderMenu = (props: FolderMenuProps) => {
  const { Icon, title, count, unread, ...linkProps } = props;
  const pathname = usePathname();
  return (
    <Link
      data-active={pathname === props.href}
      {...linkProps}
      className={[
        "group flex items-center gap-4 py-3 px-4 rounded",
        "transition-all hover:opacity-70",
        "data-[active=true]:bg-gray-30"
      ].join(" ")}
    >
      <Icon
        width={35}
        height={35}
        className={[
          "p-2 bg-gray-30 rounded text-gray-300",
          "group-data-[active=true]:text-accent-blue"
        ].join(" ")}
      />
      <h3 className="text-base">{title}</h3>
      <div className="ml-auto text-xs">
        {unread ? <span className="text-gray-500">+{unread}</span> : null}
        <span
          className={[
            "inline-block ml-2 p-2 rounded-full bg-gray-30 text-gray-300",
            "group-data-[active=true]:bg-accent-blue group-data-[active=true]:text-white"
          ].join(" ")}
        >
          {count}
        </span>
      </div>
    </Link>
  );
};

export const Navigation = () => {
  return (
    <PageSidebar>
      <div className="px-6">
        <SearchInput />
        <div className="mt-8">
          <h1 className="text-2xl font-medium flex items-center gap-[10px]">
            Mail <span className="text-gray-300 text-[16px]">(1541)</span>
          </h1>
          <NavigationGroup>
            <FolderMenu
              href="/mail/inbox/1"
              title="Inbox"
              count={1293}
              Icon={Mail}
              unread={3}
            />
            <FolderMenu href="/mail/send/1" title="Send" count={145} Icon={Send} />
            <FolderMenu href="" title="Starred" count={67} Icon={Star} />
            <FolderMenu href="" title="Draft" count={4} Icon={File} />
          </NavigationGroup>
          <NavigationGroup>
            <NavigationFolder />
          </NavigationGroup>
        </div>
      </div>
      <div className="mt-auto text-center py-6 border-t-2  ">
        <LinkBtn href="/chat/new" className="mx-auto">
          <Pencil size={24} /> Write
        </LinkBtn>
      </div>
    </PageSidebar>
  );
};
