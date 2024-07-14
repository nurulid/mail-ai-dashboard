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
import React from "react";

import { Avatar } from "../ui/Avatar";
import { Checkbox } from "../ui/Checkbox";
import Image from "next/image";

const DateCard = () => {
  return (
    <div className="p-4 bg-white border border-gray-50 rounded-md space-y-6">
      <div className="flex justify-between">
        <span className="bg-accent-light-blue size-[38px] flex items-center justify-center rounded-md">
          <CalendarMinus2 size={20} className="text-accent-blue" />
        </span>
        <div className="space-x-3 text-gray-200">
          <button>
            <Share2 size={18} />
          </button>
          <button>
            <Copy size={18} />
          </button>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-800">
        <div>
          <h4 className="text-gray-300 mb-1">Start from:</h4>
          <p>August 20</p>
        </div>
        <div>
          <h4 className="text-gray-300 mb-1">Time</h4>
          <span className="bg-gray-30 py-1 px-2 rounded-full">11:00</span>
        </div>
      </div>
    </div>
  );
};

const MapCard = () => {
  return (
    <div className="p-4 bg-white border border-gray-50 rounded-md space-y-6">
      <div className="flex justify-between">
        <span className="bg-accent-light-blue size-[38px] flex items-center justify-center rounded-md">
          <Map size={20} className="text-accent-blue" />
        </span>
        <div className="space-x-3 text-gray-200">
          <button>
            <Share2 size={18} />
          </button>
          <button>
            <Copy size={18} />
          </button>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-800">
        <div>
          <h4 className="text-gray-300 mb-1">Start from:</h4>
          <p>August 20</p>
        </div>
        <div>
          <h4 className="text-gray-300 mb-1">Link:</h4>
          <span className="bg-gray-30 py-1 px-2 rounded-full">
            <a href="" className="text-accent-blue text-xs">
              http/google/meeeeeets.jcd
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

const AttachmentCard = () => {
  return (
    <div className="bg-white p-4 rounded-md space-y-[50px]">
      <div className="flex justify-between">
        <span className="bg-gray-30 rounded-md p-2">
          <FileText size={38} className="text-accent-blue" />
        </span>
        <button className="bg-gray-30 size-[38px] rounded-full flex items-center justify-center text-gray-800 shadow-md hover:shadow-none transition-all">
          <EllipsisVertical size={18} />
        </button>
      </div>
      <div className="flex justify-between items-end">
        <span className="py-3 px-5 rounded-tr-md bg-gray-30 -ml-4 -mb-4 text-xs">Contract.doc</span>
        <button className="bg-gray-30 size-[38px] rounded-full flex items-center justify-center text-gray-800 shadow-md hover:shadow-none transition-all">
          <Download size={18} />
        </button>
      </div>
    </div>
  )
}

export const MessageOpponent = () => {
  return (
    <div className="flex items-end justify-start gap-5 ml-4 mt-8 mb-20">
      <Avatar size="xl" name="A I" />
      <div className="flex items-end gap-3">
        <div className="translate-y-10 space-y-[10px]">
          <div className="bg-gray-30 rounded-xl rounded-bl-none text-gray-300 max-w-[690px] w-full border-[10px] border-gray-30">
            <div className="rounded-md bg-white py-4 px-8">
              <div className="flex gap-5 items-start">
                <div>
                  <h2 className="mb-[10px] font-medium text-gray-800">
                    Meeting with a client
                  </h2>
                  <p className="mb-[10px]">
                    “FitMe” is a leading catering company that specializes in
                    delivering daily, healthy food options.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-300">Client:</span>
                  <div className="bg-gray-30 py-[10px] px-4 rounded-md">
                    <Image src="/logo-fitme.svg" width={150} height={19} alt="Client logo"/>
                  </div>
                </div>
              </div>
              <ul>
                <li className="py-3 border-b border-gray-50">
                  <Checkbox label="Product presentation" id="check1" />
                </li>
                <li className="py-3 border-b border-gray-50">
                  <Checkbox
                    label="Prototype or product demonstration"
                    id="check2"
                  />
                </li>
                <li className="py-3 border-b border-gray-50">
                  <Checkbox label="Project portfolio and contract " id="check3" />
                </li>
              </ul>
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div>
                  <DateCard />
                </div>
                <div className="col-span-2">
                  <MapCard />
                </div>
              </div>
            </div>
            {/* attachments */}
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div>
                <AttachmentCard />
              </div>
              <div className="col-span-2">
                <AttachmentCard />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button className="text-xs py-2 px-5 rounded-full flex items-center justify-center gap-2 bg-white text-gray-300"><Copy className="inline-block" size={18}/> Copy</button>
            <button className="text-xs py-2 px-5 rounded-full flex items-center justify-center gap-2 bg-white text-gray-300"><Share className="inline-block" size={18}/> Share</button>
          </div>
        </div>
        <span className="text-sm text-gray-300">11:02</span>
      </div>
    </div>
  );
};
