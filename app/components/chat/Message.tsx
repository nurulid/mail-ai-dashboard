import React from "react";

import { useUser } from "@/app/hooks/useUser";

import { Avatar } from "../ui/Avatar";

export const Message = () => {
  const userData = useUser();
  return (
    <div className="flex items-end justify-end gap-5 mr-4 mt-8">
      <div className="flex items-end gap-3">
        <span className="text-sm text-gray-300">11:01</span>
        <div className="bg-white py-4 px-8 rounded-xl rounded-br-none text-gray-300 max-w-[587px] w-full">
          <p>
            Requesting details and attachments for upcoming client meeting,
            please
          </p>
        </div>
      </div>
      <Avatar size="md" name={userData.name} imageUrl={userData.avatar} />
    </div>
  );
};
