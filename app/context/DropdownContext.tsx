import React, { createContext, ReactNode,useContext, useState } from 'react';

interface DropdownContextProps {
  openDropdown: string | null;
  setOpenDropdown: (title: string | null) => void;
}

const DropdownContext = createContext<DropdownContextProps | undefined>(undefined);

export const DropdownProvider = ({ children }: { children: ReactNode }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <DropdownContext.Provider value={{ openDropdown, setOpenDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = (): DropdownContextProps => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdownContext must be used within a DropdownProvider');
  }
  return context;
};