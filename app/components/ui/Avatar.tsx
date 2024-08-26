import Image from "next/image";

import { withUnit } from "@/app/utils";
import { Dot } from "lucide-react";

const sizes = { xl: 58, lg: 40, md: 38, sm: 32 };

interface AvatarProps {
  size: keyof typeof sizes;
  imageUrl?: string;
  name: string;
}

export const Avatar = (props: AvatarProps) => {
  const { name, imageUrl } = props;
  const size = sizes[props.size];
  const sizePx = withUnit(+size, "px");
  return (
    <div className="relative">
      <div
        className="rounded-full overflow-hidden group bg-white"
        style={{ width: sizePx, height: sizePx }}
      >
        {imageUrl ? (
          <Image alt="" height={size} width={size} src={imageUrl} />
        ) : (
          <div className="w-full h-full flex justify-center items-center font-bold bg-accent-red text-xs text-white">
            {name
              .split(" ")
              .map((letter) => letter.slice(0, 1))
              .slice(0, 2)
              .map((letter, index) => (
                <span key={index} className="capitalize">
                  {letter}
                </span>
              ))}
          </div>
        )}
      </div>
      <Dot className="absolute top-1 -right-4 z-10" size={40} color="#49DD9F" />
    </div>
  );
};
