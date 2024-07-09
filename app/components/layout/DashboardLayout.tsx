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
      <main className="flex gap-8">
        <Sidebar />
        {children}
      </main>
    </SidebarProvider>
  );
};
