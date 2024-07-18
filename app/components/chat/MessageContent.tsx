"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { Details } from "@/app/components/chat/Details";
import { Header } from "@/app/components/chat/Header";
import { Message } from "@/app/components/chat/Message";
import { MessageInput } from "@/app/components/chat/MessageInput";
import { MessageOpponent } from "@/app/components/chat/MessageOpponent";
import { useMessageDetails } from "@/app/context/MessageDetailsContext";

export const MessageContent = () => {
  const { isDetailsOpen } = useMessageDetails();
  return (
    <>
      <div className="flex gap-3">
        <motion.div
        className="bg-[#F1E8F5] rounded-xl p-[10px] h-[calc(100vh-160px)] overflow-auto relative flex-1 w-auto">
          <Header />
          <Message />
          <MessageOpponent />
          <div className="inline-flex gap-2"></div>
        </motion.div>
        <AnimatePresence>
          {isDetailsOpen && <Details />}
        </AnimatePresence>
      </div>
      <div className="mt-3">
        <MessageInput />
      </div>
    </>
  );
};
