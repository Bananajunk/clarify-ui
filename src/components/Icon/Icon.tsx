import type { IconProps } from "./Icon.types";

import { createElement } from "react";
import { classNames } from "~/utilities";

const Icon: React.FC<IconProps> = ({
  src,
  size = "md",
  className,
}: IconProps) => {
  const sizeClass = {
    sm: "size-3",
    md: "size-4",
    lg: "size-6",
    xl: "size-8",
  };
  return createElement(src, {
    className: classNames(sizeClass[size], className),
  });
};

export default Icon;
