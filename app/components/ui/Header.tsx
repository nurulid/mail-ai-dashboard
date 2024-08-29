import { Bell, ChevronDown, Dot } from "lucide-react";
import React from "react";

import { useUser } from "@/app/hooks/useUser";

import { Avatar } from "./Avatar";

export const Header = () => {
  const userData = useUser();
  return (
    <header className="flex justify-end items-center py-5 px-6">
      <div className="relative text-gray-200">
        <Bell />
        <Dot
          className="absolute -top-[14px] -left-[3px]"
          size={40}
          color="#EF655F"
        />
      </div>
      <div className="user flex items-center gap-3 px-4 ml-4 border-l-2">
        <div className="relative">
          <Avatar size="sm" name={userData.name} imageUrl={userData.avatar} />
          <Dot
            className="absolute top-1 -right-4 z-10"
            size={40}
            color="#49DD9F"
          />
        </div>
        <div>
          <h3 className="text-sm text-gray-600 mr-1 inline-block relative">
            {userData.name}
          </h3>
          <ChevronDown size={14} className="inline" />
        </div>
      </div>
    </header>
  );
};
