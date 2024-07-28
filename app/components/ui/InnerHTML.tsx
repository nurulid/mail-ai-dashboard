import React from "react";

function createMarkup(html: string) {
  /* eslint-disable */
  return { __html: html };
  /* eslint-disable */
}

export const InnerHTML = (props: { text: string }) => {
  const { text } = props;
  return (
    <p
      dangerouslySetInnerHTML={createMarkup(text)}
      className="text-gray-300 text-sm leading-[1.6]"
    />
  );
};
