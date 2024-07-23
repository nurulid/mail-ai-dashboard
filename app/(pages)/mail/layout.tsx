import React from "react";

import { MailList } from "@/app/components/mail/MailList";
import { Navigation } from "@/app/components/mail/Navigation";
import { Header } from "@/app/components/ui/Header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <section className="flex w-full">
      <Navigation />
      <MailList />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </section>
  );
}
