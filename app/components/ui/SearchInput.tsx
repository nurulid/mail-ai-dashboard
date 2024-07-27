import { Command, Search } from "lucide-react";
import React from "react";

interface SearchInputProps {
  placeholder?: string;
  isCommand?: boolean;
}

export const SearchInput = (props: SearchInputProps) => {
  const {placeholder = "Search...", isCommand} = props;
  return (
    <div className="relative rounded-md">
      <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
      <input
        type="text"
        className={[
          "rounded-md py-3 pl-[50px] pr-[60px] w-full placeholder:text-gray-200",
          isCommand ? "bg-gray-30" : "bg-white border-[1.5px]"
        ].join(" ")}
        placeholder={placeholder}
      />
      {isCommand && (
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-200 flex items-center gap-[6px]">
          <Command size={15} />
          <span className="text-xl">K</span>
        </div>
      )}
    </div>
  );
};
