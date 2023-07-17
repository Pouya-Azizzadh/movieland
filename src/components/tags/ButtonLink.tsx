import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  to: string;
  radius?: "full" | "lg";
}

const ButtonLink: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  to,
  radius,
}) => {
  return (
    <Link
      className={`px-4 py-2  text-center text-ellipsis ${className} ${
        radius == "full"
          ? "rounded-l-full rounded-r-full"
          : radius === "lg"
          ? "rounded-lg"
          : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
