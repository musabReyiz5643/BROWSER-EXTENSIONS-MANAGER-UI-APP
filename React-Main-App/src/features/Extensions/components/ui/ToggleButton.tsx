import { cn } from "@/utils/cn";
import type React from "react";

type ToggleButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive: boolean;
  className?: string;
};

const ToggleButton = ({ isActive, className, ...props }: ToggleButton) => {
  return (
    <div className="focus-within:ring-2 ring-red-500  rounded-2xl flex items-center justify-center p-0.5">
      <button
        className={cn(
          `relative w-12 h-7 rounded-full cursor-pointer transition-colors duration-200 ${
            isActive ? "bg-red-500" : "bg-toggle-off "
          }`,
          className,
        )}
        {...props}
      >
        <div
          className={`absolute top-0.75 w-5.5 h-5.5 rounded-full transition-all duration-200 ${
            isActive ? "right-0.75 bg-white" : "left-0.75 bg-white"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleButton;
