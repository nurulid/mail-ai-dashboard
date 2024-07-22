import React from "react";

import { Navigation } from "@/app/components/mail/Navigation";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
