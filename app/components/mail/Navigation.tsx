import { File, Mail, Pencil, Send, Star } from "lucide-react";
import Link from "next/link";
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
  isActive?: boolean;
}

const FolderMenu = (props: FolderMenuProps) => {
  const { Icon, title, count, unread, isActive = false, ...linkProps } = props;
  return (
    <Link
      {...linkProps}
      className={`flex items-center gap-4 py-3 px-4 rounded transition-all ${
        isActive ? "bg-gray-30" : "hover:opacity-70"
      }`}
    >
      <Icon
        width={35}
        height={35}
        className={[
          "p-2 bg-gray-30 rounded",
          isActive ? "text-accent-blue" : "text-gray-300",
        ].join(" ")}
      />
      <h3 className="text-base">{title}</h3>
      <div className="ml-auto text-xs">
        {unread ? <span className="text-gray-500">+{unread}</span> : null}
        <span
          className={[
            "inline-block ml-2 p-2 rounded-full",
            isActive ? "bg-accent-blue text-white" : "bg-gray-30 text-gray-300",
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
              href=""
              title="Inbox"
              count={1293}
              Icon={Mail}
              unread={3}
              isActive
            />
            <FolderMenu href="" title="Send" count={145} Icon={Send} />
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
