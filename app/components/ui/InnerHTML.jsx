import React from "react";

function createMarkup(html) {
  /* eslint-disable */
  return { __html: html };
  /* eslint-disable */
}

export const InnerHTML = ({ text }) => {
  return (
    <p dangerouslySetInnerHTML={createMarkup(text)} className="text-gray-300 text-sm leading-[1.6]" />
  );
};
