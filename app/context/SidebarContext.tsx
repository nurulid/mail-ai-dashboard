"use client"

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface SidebarContextType {
  isSidebarShrink: boolean;
  setIsSidebarShrink: (isSidebarShrink: boolean) => void;
  toggleSidebar: VoidFunction;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = (props: PropsWithChildren) => {
  const [isSidebarShrink, setIsSidebarShrink] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('isSidebarShrink');
      if (savedState) {
        setIsSidebarShrink(JSON.parse(savedState) as boolean);
      }
      setIsHydrated(true);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarShrink((shrink: boolean) => !shrink);
  };

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('isSidebarShrink', JSON.stringify(isSidebarShrink));
    }
  }, [isSidebarShrink, isHydrated]);

  if (!isHydrated) {
    return null; // or return a loading spinner
  }

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
