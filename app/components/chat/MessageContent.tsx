"use client";

import React from "react";

import { Message } from "@/app/components/chat/Message";
import { MessageOpponent } from "@/app/components/chat/MessageOpponent";

export const MessageContent = () => {
  return (
    <>
      <Message />
      <MessageOpponent />
    </>
  );
};
