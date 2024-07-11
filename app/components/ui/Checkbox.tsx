"use client";

import { Indicator,Root } from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { ComponentProps } from "react";

interface BaseCheckboxProps {
  label?: string;
  id: string;
  customLabel?: JSX.Element | string;
}

type CheckboxProps = BaseCheckboxProps & ComponentProps<typeof Root>;

export const Checkbox = (props: CheckboxProps) => {
  const { label, id, customLabel, ...checkboxProps } = props;
  return (
    <div className="flex gap-[10px] items-center">
      <Root
        {...checkboxProps}
        id={id}
        className={[
          "group flex size-[18px] appearance-none items-center justify-center rounded outline-none bg-white", 
          "border border-gray-200", 
          "data-[state=checked]:bg-accent-blue data-[state=checked]:text-white"
        ].join(" ")}
      >
        <Indicator className="font-medium">
          <CheckIcon size={12} className="stroke-[3px]" />
        </Indicator>
      </Root>

      {customLabel && (
        customLabel
      )}

      {label && (
        <label htmlFor={id} className="leading-none text-sm text-gray-300 group-data-[state=checked]:text-gray-800 font-medium cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};
