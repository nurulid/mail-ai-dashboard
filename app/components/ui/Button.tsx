import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  primary: "bg-accent-blue text-white border-accent-blue",
  secondary: "bg-white border",
};

interface ButtonProps extends ComponentProps<"button"> {
  variant?: keyof typeof variants;
  isFull?: boolean;
}

const buttonClassesBase: string[] = ["px-7 rounded-md text-sm font-medium transition-all flex justify-center items-center gap-2"];

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { className = "", variant = "primary", isFull = false, children, ...buttonProps } = props;
  const btnWidth = isFull ? "w-full py-[10px]" : "py-3";
  return (
    <button
      className={twMerge(buttonClassesBase, btnWidth, className, variants[variant])}
      {...buttonProps}
    >{children}</button>
  );
};
