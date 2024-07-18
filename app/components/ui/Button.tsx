import React, { ComponentProps, PropsWithChildren } from "react";

type Color = "primary" | "secondary";

interface ButtonProps 
  extends PropsWithChildren<ComponentProps<"button">> {
    color?: Color;
    isFull?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    color = "primary",
    isFull = false,
    className = "",
    type = "button",
    children,
    ...buttonProps
  } = props;

  const variants: Record<Color, string> = {
    primary: "bg-accent-blue text-white border-accent-blue",
    secondary: "bg-white border",
  };

  return (
    <button
      {...buttonProps}
      type={type}
      className={[
        "px-7 rounded-md text-sm font-medium transition-all",
        "flex justify-center items-center gap-2",
        isFull ? "w-full py-[10px]" : "py-3",
        className,
        variants[color],
      ].join(" ")}
    >
      {children}
    </button>
  );
};
