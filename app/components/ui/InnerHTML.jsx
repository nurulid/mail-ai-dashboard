import React from "react";

function createMarkup(html) {
  return { __html: html };
}

export const InnerHTML = ({ text }) => {
  return (
    <p dangerouslySetInnerHTML={createMarkup(text)} className="text-gray-300 text-sm leading-[1.6]" />
  );
};
