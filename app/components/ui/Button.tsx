"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  primary: "bg-accent-blue text-white border-accent-blue hover:opacity-90 transition-all",
  secondary: "bg-white border hover:bg-gray-30 transition-all",
};

const buttonClassesBase: string[] = [
  "px-7 rounded-md text-sm font-medium transition-all inline-flex justify-center items-center gap-2",
];

interface ButtonProps extends ComponentProps<"button"> {
  variant?: keyof typeof variants;
  isFull?: boolean;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className = "",
    variant = "primary",
    isFull = false,
    children,
    ...buttonProps
  } = props;
  const btnWidth = isFull ? "w-full py-[10px]" : "py-3";
  return (
    <button
      className={twMerge(
        buttonClassesBase,
        btnWidth,
        className,
        variants[variant]
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

interface LinkBtnProps extends ComponentProps<typeof Link> {
  variant?: keyof typeof variants;
  isFull?: boolean;
}

export const LinkBtn = (props: PropsWithChildren<LinkBtnProps>) => {
  const pathname = usePathname();
  const {
    className = "",
    variant = "primary",
    isFull = false,
    children,
    ...linkProps
  } = props;
  const btnWidth = isFull ? "w-full py-[10px]" : "py-3";
  return (
    <Link
      data-active={pathname === props.href}
      className={twMerge(buttonClassesBase, btnWidth, className, variants[variant])}
      {...linkProps}
    >
      {children}
    </Link>
  );
};
