"use client"

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface SidebarContextType {
  isSidebarShrink: boolean;
  setIsSidebarShrink: (isSidebarShrink: boolean) => void;
  toggleSidebar: VoidFunction;
}

export const SidebarContext = createContext({} as SidebarContextType);

export const SidebarProvider = (props: PropsWithChildren) => {
  const [isSidebarShrink, setIsSidebarShrink] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarShrink(!isSidebarShrink);
  };

  return (
    <SidebarContext.Provider
      value={{ isSidebarShrink, setIsSidebarShrink, toggleSidebar }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
