/** @format */

import React, { FC, PropsWithChildren, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLButtonElement> {
  className?: string;
  radius: "full" | "lg";
}
const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  radius,
  onClick,
}) => {
  return (
    <button
      className={`px-4 py-2 font-bold text-center text-ellipsis	 text-white ${className} ${
        radius == "full"
          ? "rounded-l-full rounded-r-full"
          : radius === "lg"
          ? "rounded-lg"
          : ""
      }`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
