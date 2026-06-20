import { cn } from "@/utils/cn";
import type React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <div className=" flex items-center justify-center p-1 focus-within:ring-2 ring-red-500 rounded-full">
      <button
        className={cn(
          `auto h-auto px-5 py-2  border border-neutral-400  rounded-3xl text-xl text-text-primary dark:border-neutral-600 cursor-pointer `,
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
