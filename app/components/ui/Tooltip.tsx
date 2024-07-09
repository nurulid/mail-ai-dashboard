import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React, { ComponentProps, PropsWithChildren } from "react";

interface TooltipProps
  extends PropsWithChildren<ComponentProps<typeof TooltipPrimitive.Content>> {
  content: string;
  defaultOpen?: boolean;
  side?: "top" | "right" | "bottom" | "left";
}

export function Tooltip(props: TooltipProps) {
  const { content, defaultOpen, side = "top", children, ...tooltipProps } = props;
  return (
    <TooltipPrimitive.Provider delayDuration={50}>
      <TooltipPrimitive.Root
        defaultOpen={defaultOpen}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          side={side}
          sideOffset={5}
          className="select-none rounded-md bg-accent-blue text-white p-3 text-sm leading-none shadow-md will-change-[transform,opacity] ml-0"
          {...tooltipProps}
        >
          {content}
          <TooltipPrimitive.Arrow
            width={11}
            height={5}
            className="fill-accent-blue"
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
