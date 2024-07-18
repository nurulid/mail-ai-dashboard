"use client"

import { createContext, PropsWithChildren, useContext, useState } from "react";

interface MessageDetailsContextType {
  isDetailsOpen: boolean;
  setIsDetailsOpen: (isDetailsOpen: boolean) => void;
  toggleDetails: VoidFunction;
}

export const MessageDetailsContext = createContext<MessageDetailsContextType | undefined>(undefined);

export const MessageDetailsProvider = (props: PropsWithChildren) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);

  const toggleDetails = () => {
    setIsDetailsOpen((open: boolean) => !open);
  };

  return (
    <MessageDetailsContext.Provider
      value={{isDetailsOpen, setIsDetailsOpen, toggleDetails}}
    >
      {props.children}
    </MessageDetailsContext.Provider>
  )
}

export const useMessageDetails = (): MessageDetailsContextType => {
  const context = useContext(MessageDetailsContext);

  if(!context) {
    throw new Error('useMessageDetails must be used within a MessageDetailsProvider');
  }
  return context;
}
