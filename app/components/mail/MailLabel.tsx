import { Paperclip } from "lucide-react";
import React from 'react'

import { capitalizeFirstLetter } from '@/app/utils';

interface MailLabelProps {
  attachment?: string[];
  label?: string;
}

export const MailLabel = (props: MailLabelProps) => {
  const {attachment, label} = props;
  return (
    <span
      className="inline-flex items-center gap-1 py-1 px-3 rounded-full bg-gray-30 text-gray-300 text-sm"
    >
      {label ? (
        <>
          <span className="w-[8px] h-[8px] rounded-full bg-gray-300"></span>
          {capitalizeFirstLetter(label)}
        </>
      ): null}
      {attachment ? (
        <>
          <Paperclip className="inline-block" size={18} /> +{attachment.length}
        </>
      ): null}
    </span>
  )
}
