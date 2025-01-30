import type { ButtonProps } from "./Button.types";

import { useMemo } from "react";
import { Typography } from "../Typography";
import { classNames } from "~/utilities";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
}: ButtonProps) => {
  const variantClass = useMemo(() => {
    switch (variant) {
      case "primary":
        return "bg-green-900 hover:bg-green-900/80 border-2 border-green-900 text-white";
      case "secondary":
        return "bg-gray-100 hover:bg-gray-100/80 border-2 border-gray-100 text-black";
      case "tertiary":
        return "bg-transparent text-green-900 border-2 border-green-900 hover:bg-green-900/10";
      default:
        return "bg-green-900 text-white";
    }
  }, [variant]);

  return (
    <button
      className={classNames(
        variantClass,
        "px-16 py-4 rounded-sm cursor-pointer",
      )}
    >
      {typeof children === "string" ? (
        <Typography as="span" variant="bodyMd">
          {children}
        </Typography>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
