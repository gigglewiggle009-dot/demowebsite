import { twMerge } from "tailwind-merge";

export const SharedButton = ({ text, className, ...props }) => {
  return (
    <button className={twMerge("rounded-32", className)} {...props}>
      {text}
    </button>
  );
};
