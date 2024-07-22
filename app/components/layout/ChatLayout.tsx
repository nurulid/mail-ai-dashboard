"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";

import { useMessageDetails } from "@/app/context/MessageDetailsContext";

import { Details } from "../chat/Details";
import { Header } from "../chat/Header";
import { MessageInput } from "../chat/MessageInput";
import { Navigation } from "../chat/Navigation";

export const ChatLayout = ({ children }: React.PropsWithChildren) => {
  const { isDetailsOpen } = useMessageDetails();
  return (
    <section className="flex gap-2 w-full h-full">
      <Navigation />
      <div className="flex-1">
        <div className="flex gap-3">
          <div className="bg-[#F1E8F5] rounded-xl p-[10px] h-[calc(100vh-160px)] overflow-auto relative flex-1 w-auto">
            <Header />
            {children}
          </div>
          <AnimatePresence>{isDetailsOpen && <Details />}</AnimatePresence>
        </div>
        <div className="mt-3">
          <MessageInput />
        </div>
      </div>
    </section>
  );
};
