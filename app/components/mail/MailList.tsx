import { Filter, Star, Trash2 } from "lucide-react";
import React from "react";

import { useMailInbox } from "@/app/hooks/useMailInbox";

import { SearchInput } from "../ui/SearchInput";
import { MailItem } from "./MailItem";

export const MailList = () => {
  const mailInboxData = useMailInbox();
  return (
    <div className="w-[430px] border border-x-1 border-y-0 relative">
      {/* mail header */}
      <div className="px-6">
        <div className="flex justify-between py-8 mb-2 border-b-2">
          {/* mail title */}
          <h2 className="text-xl font-semibold">
            Inbox
            <span className="text-gray-300 text-sm inline-block ml-2">
              (1293)
            </span>
          </h2>
          {/* mail filter */}
          <div className="flex gap-[10px] text-gray-200">
            <button className="button-icon">
              <Trash2 size={24}/>
            </button>
            <button className="button-icon">
              <Star size={24}/>
            </button>
            <button className="button-icon">
              <Filter size={24}/>
            </button>
          </div>
        </div>
        {/* mail search */}
        <SearchInput placeholder="Search messages..." />
      </div>
      {/* mail list */}
      <div className="h-[calc(100vh-154px)] overflow-auto">
        {mailInboxData.map(
          ({ user, email, avatar, time, title, desc, isRead, isStarred, attachment, label }, i ) => {
            return (
              <MailItem
                key={i}
                {...{ user, email, avatar, time, title, desc, isRead, isStarred, attachment, label}}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
