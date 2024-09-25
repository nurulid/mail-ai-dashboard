"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";

import { useMessageDetails } from "@/app/context/MessageDetailsContext";

import { Details } from "../chat/Details";
import { HeaderChat } from "../chat/HeaderChat";
import { MessageInput } from "../chat/MessageInput";
import { Navigation } from "../chat/Navigation";
import { Header } from "../ui/Header";

export const ChatLayout = ({ children }: React.PropsWithChildren) => {
  const { isDetailsOpen } = useMessageDetails();
  return (
    <section className="flex w-full h-full">
      <Navigation />
      <div className="flex-1 ml-2">
        <Header />
        <div className="flex flex-col h-[calc(100vh-72px)] pr-3">
          <div className="flex gap-3">
            <div className="bg-[#F1E8F5] rounded-xl p-[10px] h-[calc(100vh-160px)] overflow-auto relative flex-1 w-auto">
              <HeaderChat />
              {children}
            </div>
            <AnimatePresence>{isDetailsOpen && <Details />}</AnimatePresence>
          </div>
          <div className="mt-auto py-3">
            <MessageInput />
          </div>
        </div>
      </div>
    </section>
  );
};
