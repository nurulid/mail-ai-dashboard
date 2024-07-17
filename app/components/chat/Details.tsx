import { motion } from "framer-motion";
import { Archive, ChevronDown, Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties,PropsWithChildren, useState } from "react";

import { useMessageDetails } from "@/app/context/MessageDetailsContext";

const links = ["https://google.com", "https://fb.com", "https://tweet.com"];

interface SectionDropdownType {
  title: string;
  items: string;
}

const SectionDropdown = (props: PropsWithChildren<SectionDropdownType>) => {
  const { title, items, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((open: boolean) => !open);
  };

  return (
    <section className="p-[--padd] border-t">
      <button
        onClick={toggleDropdown}
        className="flex gap-2 items-center w-full hover:opacity-70"
      >
        <span>{title}</span>
        <ChevronDown
          size={18}
          className={`${isOpen ? "rotate-180" : ""} transition-all delay-100`}
        />
        <span className="size-7 p-1 bg-gray-30 text-gray-300 ml-auto rounded-full text-xs">
          {items}
        </span>
      </button>
      {isOpen && <div className="mt-3">{children}</div>}
    </section>
  );
};

export const Details = () => {
  const { toggleDetails } = useMessageDetails();
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", duration: 0.3 }}
      exit={{ opacity: 1, x: 300 }}
      style={{ "--padd": "24px" } as CSSProperties}
      className="w-[259px] border rounded-md border-gray-50 flex flex-col"
    >
      <div className="p-[--padd]">
        <div className="flex justify-between items-center">
          <h2 className="text-lg">General info</h2>
          <button onClick={toggleDetails} className="text-gray-300">
            <X size={18} />
          </button>
        </div>
        <div className="flex flex-col items-center mt-6 space-y-2">
          <Image
            width={68}
            height={68}
            src="/user.svg"
            alt="AI"
            className="rounded-full border border-gray-50"
          />
          <h3 className="text-[22px] font-semibold">JCD.AI</h3>
          <p className="text-gray-300">Creation: 28 June, 10:59</p>
        </div>
      </div>
      <SectionDropdown title="Links" items={links.length.toString()}>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index} className="text-sm text-gray-300 py-2">
                <Link href={link} className="hover:underline">
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </SectionDropdown>
      <SectionDropdown title="Media" items="4"></SectionDropdown>
      <SectionDropdown title="Files" items="4"></SectionDropdown>
      <SectionDropdown title="Tags" items="4"></SectionDropdown>
      <nav className="p-[--padd] grid gap-4 mt-auto border-t text-sm">
        <button className="flex gap-2 items-center hover:opacity-70">
          <Archive className="text-gray-300" size={24}/> Add to Archive
        </button>
        <button className="flex gap-2 items-center text-accent-red hover:opacity-70">
          <Trash2 size={24}/> Deleted to chat
        </button>
      </nav>
    </motion.div>
  );
};
