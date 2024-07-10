import React from "react";

import { SidebarProvider } from "@/app/context/SidebarContext";

import { Sidebar } from "../Sidebar";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SidebarProvider>
      <main className="flex w-full h-screen">
        <Sidebar />
        <div className="px-6 py-3 flex-1">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};
