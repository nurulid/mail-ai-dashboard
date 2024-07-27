import {
  Archive,
  ChevronLeft,
  ChevronRight,
  Download,
  Forward,
  Printer,
  Reply,
  Sparkles,
  Star,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import React, { CSSProperties } from "react";

import { InnerHTML } from "@/app/components/ui/innerHTML";
import { formatMonthDay, formatTime,getFirstCharacter } from "@/app/utils";

import { Button } from "../ui/Button";
import { MailLabel } from "./MailLabel";

const mail = {
  id: "8484",
  user: "Leslie Alexander",
  email: "leslie1209@gmail.com",
  avatar: "/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpeg",
  time: "2024-03-13T04:15:00Z",
  title: "Completed tasks",
  desc: "Dear Alexandra, <br/> <br/> I hope this email finds you well. I am writing to inform you that we have scheduled a business meeting to discuss collaboration opportunities and the signing of the contract. We are excited to take this next step in our partnership. <br/> Please let us know if you have any specific topics or documents you would like to discuss during the meeting. <br/> <br/> Sincerely,<br/> Leslie Alexander",
  isRead: true,
  isStarred: false,
  attachment: [
    {
      name: "file.doc",
      size: "95.8Kb",
    },
    {
      name: "file.pdf",
      size: "55.8Kb",
    },
  ],
  label: ["Meet", "Bussiness"],
  company: "Lesliecompany",
  to: ["Alexandra Nowak", "Victor Mickiewicz"],
};

const MailMenu = () => {
  return (
    <div className="flex justify-between items-center px-[--padd] py-5 border-y text-gray-200">
      <button className="button-icon">
        <Archive size={18} className="mail-icon" />
      </button>
      <div className="pagination flex gap-2 text-gray-300">
        <button className="button-icon">
          <ChevronLeft className="mr-2" />
        </button>
        <span>3</span>
        <span>of</span>
        <span>1293</span>
        <button className="button-icon">
          <ChevronRight className="ml-2" />
        </button>
      </div>
      <div className="flex items-center gap-[18px]">
        <button className="button-icon">
          <Star size={18} className="mail-icon" />
        </button>
        <button className="button-icon">
          <Printer size={18} className="mail-icon" />
        </button>
        <button className="button-icon">
          <Trash2 size={18} className="mail-icon" />
        </button>
      </div>
    </div>
  );
};

const MailSender = () => {
  return (
    <div className="p-[--padd] border-b">
      <div className="flex flex-wrap justify-between gap-y-2 gap-3 items-center mb-6">
        <div className="flex gap-3">
          <figure className="w-[40px] h-[40px] rounded-full bg-mailOrange text-white text-[18px] text-center leading-[40px]">
            {mail.avatar ? (
              <Image
                width={40}
                height={40}
                src={mail.avatar}
                alt="user avatar"
                className="rounded-full object-cover w-full h-full"
              />
            ) : (
              getFirstCharacter(mail.user)
            )}
          </figure>
          <div>
            <h4 className="text-sm font-semibold">{mail.user}</h4>
            <p className="text-xs text-gray-300">{mail.email}</p>
          </div>
        </div>
        <div className="relative">
          <p className="text-xs mr-5">
            <span>{formatMonthDay(mail.time)},</span>
            <span className="text-gray-300"> {formatTime(mail.time)}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-y-2 gap-6 text-xs">
        <div>
          <span className="text-gray-300 mr-2">From:</span>
          <span>{mail.company}</span>
        </div>
        <div>
          <span className="text-gray-300 mr-2">To:</span>
          <span>{mail.to.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};

const MailContent = () => {
  return (
    <div className="py-5 px-[--padd]">
      <div className="flex items-center justify-between flex-wrap gap-y-2 mb-5">
        <div className="space-x-2">
          {mail.label.map((item, i) => {
            return <MailLabel key={i} label={item} />;
          })}
        </div>
        <Button variant="secondary">
          <Sparkles
            size={18}
            className="inline-block mr-2 -translate-y-[2px] fill-accent-yellow"
          />{" "}
          Brief summary
        </Button>
      </div>
      <div className="w-[95%]">
        <h2 className="text-2xl font-semibold mb-4">{mail.title}</h2>
        <div>
          <InnerHTML text={mail.desc} />
        </div>
      </div>
    </div>
  );
};

const MailAttachments = () => {
  return (
    <div className="px-[--padd] mb-5">
      <h3 className="mb-3">Attachments</h3>
      <div className="grid grid-cols-2 gap-[10px] text-gray-300 ">
        {mail.attachment.map((item, i) => (
          <div
            key={i}
            className="p-[10px] border rounded-[8px]"
          >
            <div className="text-sm flex items-center gap-2 mb-3">
              <Image
                src="/icon-file.svg"
                width={24}
                height={24}
                alt="icon file"
              />
              <p>{item.name}</p>
              <Download size={14} className="ml-auto" />
            </div>
            <div className="text-xs flex justify-between items-center">
              <span>{item.size}</span>
              <span>28 June, 11:02</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MailActions = () => {
  return (
    <div className="mx-[--padd] pt-3 flex gap-3 border-t-2 mt-auto sticky bottom-0 bg-white dark:bg-inherit">
      <Button variant="secondary" isFull>
        <Reply size={18} />
        Reply
      </Button>
      <Button variant="secondary" isFull>
        <Forward size={18} />
        Forward to
      </Button>
    </div>
  );
};

export const MailDetails = () => {
  return (
    <section style={{"--padd": "30px"} as CSSProperties} className="min-w-[400px] w-full">
      <div className="sticky top-0">
        <MailMenu />
      </div>
      <div className="h-[calc(100vh-158px)] overflow-y-auto flex flex-col">
        <MailSender />
        <MailContent />
        <MailAttachments />
        <MailActions />
      </div>
    </section>
  );
};
