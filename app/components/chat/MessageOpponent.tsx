import {
  CalendarMinus2,
  Copy,
  Download,
  EllipsisVertical,
  FileText,
  Map,
  Share,
  Share2,
} from "lucide-react";
import Image from "next/image";
import React from "react";

import { useClientMeetingDetails } from "@/app/hooks/useClientMeetingDetails";

import { Avatar } from "../ui/Avatar";
import { Checkbox } from "../ui/Checkbox";

interface InfoCardProps {
  date?: string;
  location?: string;
  locationLink?: string;
  isLocation?: boolean;
}

const InfoCard = (props: InfoCardProps) => {
  const { date, location, locationLink, isLocation = false } = props;
  return (
    <div className="p-4 bg-white border rounded-md space-y-6 min-w-[207px] last:min-w-min last:flex-1 last:w-full">
      <div className="flex justify-between">
        {/* icon */}
        <span className="bg-accent-light-blue size-[38px] flex items-center justify-center rounded-md">
          {!isLocation ? (
            <CalendarMinus2 size={20} className="text-accent-blue" />
          ) : (
            <Map size={20} className="text-accent-blue" />
          )}
        </span>
        {/* actions */}
        <div className="space-x-3 text-gray-200">
          <button className="button-icon">
            <Share2 size={18} />
          </button>
          <button className="button-icon">
            <Copy size={18} />
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-x-2 gap-y-3 flex-wrap text-sm text-gray-800">
        <div>
          <h4 className="text-gray-300 mb-2">
            {!isLocation ? "Start from:" : "Location:"}
          </h4>
          <p>{!isLocation ? <>{date}</> : <>{location}</>}</p>
        </div>
        <div>
          <h4 className="text-gray-300 mb-2">
            {!isLocation ? "Time:" : "Link:"}
          </h4>
          <span className="bg-gray-30 py-1 px-2 rounded-full">
            {!isLocation ? "11:00" : <a href={locationLink} target="_blank" className="text-accent-blue">{locationLink}</a>}
          </span>
        </div>
      </div>
    </div>
  );
};

const AttachmentCard = (props: { file: string }) => {
  const { file } = props;
  return (
    <div className="bg-white p-4 rounded-md space-y-[50px] min-w-[224px] last:min-w-fit last:flex-1">
      <div className="flex justify-between">
        <span className="bg-gray-30 rounded-md p-2">
          <FileText size={38} className="text-accent-blue" />
        </span>
        <button className="bg-gray-30 size-[38px] rounded-full flex items-center justify-center text-gray-800 shadow-md hover:shadow-none transition-all">
          <EllipsisVertical size={18} />
        </button>
      </div>
      <div className="flex justify-between items-end">
        <span className="py-3 px-5 rounded-tr-md bg-gray-30 -ml-4 -mb-4 text-xs">
          {file}
        </span>
        <button className="bg-gray-30 size-[38px] rounded-full flex items-center justify-center text-gray-800 shadow-md hover:shadow-none transition-all">
          <Download size={18} />
        </button>
      </div>
    </div>
  );
};

interface MessageActionProps {
  action: VoidFunction;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
}

const MessageAction = (props: MessageActionProps) => {
  const { action, Icon, name } = props;
  return (
    <button
      onClick={action}
      className="text-xs py-2 px-5 rounded-full flex items-center justify-center gap-2 bg-white text-gray-300 hover:opacity-70 transition-all"
    >
      <Icon className="inline-block" width={18} height={18} /> {name}
    </button>
  );
};

export const MessageOpponent = () => {
  const messageData = useClientMeetingDetails();
  return (
    <div className="flex items-end justify-start gap-5 ml-4 mt-8 mb-20">
      <Avatar size="xl" name="A I" imageUrl="/user.svg" />
      <div className="flex items-end gap-3">
        <div className="translate-y-10 space-y-[10px]">
          <div className="bg-gray-30 rounded-xl rounded-bl-none text-gray-300 max-w-[690px] w-full border-[10px] border-gray-30">
            <div className="rounded-md bg-white py-4 px-8">
              <div className="flex gap-x-5 items-start flex-wrap">
                <div className="flex-1">
                  <h2 className="mb-[10px] font-medium text-gray-800">
                    {messageData.title}
                  </h2>
                  <p className="mb-[10px]">{messageData.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-300">Client:</span>
                  <div className="bg-gray-30 py-[10px] px-4 rounded-md">
                    {messageData.client.logo ? (
                      <Image
                        src={messageData.client.logo}
                        width={150}
                        height={19}
                        alt="Client logo"
                        className="max-w-[62px]"
                      />
                    ) : (
                      <span className="font-semibold text-gray-800">
                        {messageData.client.name}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <ul>
                {messageData.todos.map((item, index) => {
                  return (
                    <li key={index} className="py-3 border-b">
                      <Checkbox
                        label={item.name}
                        id={`check${index+1}`}
                        defaultChecked={item.isDone}
                      />
                    </li>
                  );
                })}
              </ul>
              {/* information */}
              <div className="flex gap-[10px] mt-3 w-full">
                <InfoCard date={messageData.information.date}/>
                <InfoCard isLocation location={messageData.information.location} locationLink={messageData.information.locationLink}/>
              </div>
            </div>
            {/* attachments */}
            <div className="flex gap-[10px] mt-3 w-full">
              {messageData.attachments.slice(0, 2).map((attachment, index) => {
                return <AttachmentCard key={index} file={attachment.file} />;
              })}
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <MessageAction
              action={() => { console.log("click copy"); }}
              Icon={Copy}
              name="Copy"
            />
            <MessageAction
              action={() => { console.log("click share"); }}
              Icon={Share}
              name="Share"
            />
          </div>
        </div>
        <span className="text-sm text-gray-300">11:02</span>
      </div>
    </div>
  );
};
