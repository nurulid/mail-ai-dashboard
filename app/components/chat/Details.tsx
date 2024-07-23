import { motion } from "framer-motion";
import { Archive, ChevronDown, FileText, Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties, PropsWithChildren, useState } from "react";

import { useMessageDetails } from "@/app/context/MessageDetailsContext";
import { useClientMeetingDetails } from "@/app/hooks/useClientMeetingDetails";

interface SectionDropdownProps {
  title: string;
  items: number;
}

const SectionDropdown = (props: PropsWithChildren<SectionDropdownProps>) => {
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

interface FileProps {
  file: string;
  size: string;
  date: string;
}

const File = (props: FileProps) => {
  const {file, size, date} = props;
  return (
    <div className="text-gray-300 p-[10px] border rounded-md mb-2 last:mb-0">
      <p className="text-sm mb-[10px]"><FileText size={14} className="inline-block"/> {file}</p>
      <div className="text-xs flex justify-between items-center">
        <span>{size}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}

export const Details = () => {
  const { toggleDetails } = useMessageDetails();
  const messageData = useClientMeetingDetails();
  return (
    <motion.div
      variants={{
        hidden: { width: 0, opacity: 0 },
        visible: { width: '259px', opacity: 1 }
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.15 }}
      style={{ "--padd": "24px" } as CSSProperties}
      className="border rounded-md flex flex-col"
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
            className="rounded-full border  "
          />
          <h3 className="text-[22px] font-semibold">JCD.AI</h3>
          <p className="text-gray-300 text-xs">Creation: 28 June, 10:59</p>
        </div>
      </div>
      <SectionDropdown title="Links" items={messageData.links.length}>
        <ul>
          {messageData.links.map((link, index) => {
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
      <SectionDropdown title="Media" items={messageData.media.length}>
        <div className="grid grid-cols-3 gap-3">
          {messageData.media.map((item, index) => {
              return (
                <Image
                  key={index}
                  src={item}
                  width={60}
                  height={60}
                  alt="media item"
                  className="object-cover w-full h-full"
                />
              );
            })}
        </div>
      </SectionDropdown>
      <SectionDropdown title="Files" items={messageData.attachments.length}>
        {messageData.attachments.map((attachment, index) => {
          return (
            <File key={index} file={attachment.file} size={attachment.size} date={attachment.date}/>
          )
        })}
      </SectionDropdown>
      <SectionDropdown title="Tags" items={messageData.tags.length}></SectionDropdown>
      <nav className="p-[--padd] grid gap-4 mt-auto border-t text-sm">
        <button className="flex gap-2 items-center hover:opacity-70">
          <Archive className="text-gray-300" size={24} /> Add to Archive
        </button>
        <button className="flex gap-2 items-center text-accent-red hover:opacity-70">
          <Trash2 size={24} /> Deleted to chat
        </button>
      </nav>
    </motion.div>
  );
};
