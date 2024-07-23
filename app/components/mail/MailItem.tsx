import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

import { formatMonthDay, formatTime,getFirstCharacter } from "@/app/utils";

import { MailLabel } from "./MailLabel";

interface MailItemProps {
  user: string;
  email: string;
  avatar: string;
  time: string;
  title: string;
  desc: string;
  isRead?: boolean;
  isStarred?: boolean;
  attachment?: string[];
  label?: string[];
}

export const MailItem = (props: MailItemProps) => {
  const { user, email, avatar, time, title, desc, isRead, isStarred, attachment, label, } = props;
  return (
    <div className="transition-all">
      <div className="flex py-6 mx-6 border-b-2">
        <div className="w-[30px]">
          <input type="checkbox" />
        </div>
        <div className="w-[calc(100%-30px)]">
          <div className="flex gap-3 items-center mb-3">
            <figure className="w-[40px] h-[40px] rounded-full bg-accent-red text-white text-[18px] text-center leading-[40px]">
              {avatar ? (
                <Image
                  src={avatar}
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-full h-full"
                />
              ) : getFirstCharacter(user)}
            </figure>
            <div>
              <h4 className="text-sm font-semibold">{user}</h4>
              <p className="text-xs text-gray-300">{email}</p>
            </div>
            <div className="ml-auto relative">
              <p className="text-xs mr-5">
                <span>{formatMonthDay(time)},</span>
                <span className="text-gray-300"> {formatTime(time)}</span>
              </p>
              {isRead ? null : (
                <span className="w-[9px] h-[9px] rounded-full bg-mailOrange inline-block absolute right-0 top-1/2 -translate-y-1/2"></span>
              )}
            </div>
          </div>
          <div className="text-sm">
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="truncate text-gray-300">{desc}</p>
          </div>
          {attachment && label && (attachment.length > 0 || label.length > 0 || isStarred) && (
            <div className="flex justify-between items-center mt-5">
              <div className="flex gap-2 items-center">
                {isStarred ? (
                  <Star size={16} className="fill-accent-yellow text-accent-yellow" />
                ) : null}
                {attachment.length > 0 && (
                  <MailLabel attachment={attachment}/>
                )}
              </div>
              <div className="space-x-2">
                {label.map((item, i) => {
                  return (
                    <MailLabel key={i} label={item}/>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
