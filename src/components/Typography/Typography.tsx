import type { TypographyProps } from "./Typography.types";

import { createElement, useMemo } from "react";
import { classNames } from "~/utilities";

const Typography: React.FC<TypographyProps> = ({
  variant,
  as = "p",
  className,
  children,
}: TypographyProps) => {
  const variantClass = useMemo(() => {
    switch (variant) {
      case "heading2Xl":
        return "text-6xl";
      case "headingXl":
        return "text-5xl";
      case "headingLg":
        return "text-4xl";
      case "headingMd":
        return "text-3xl";
      case "headingSm":
        return "text-2xl";
      case "headingXs":
        return "text-xl";
      case "bodyLg":
        return "text-lg";
      case "bodyMd":
        return "text-md";
      case "bodySm":
        return "text-sm";
      case "bodyXs":
        return "text-xs";
    }
  }, [variant]);

  const defaults = useMemo(() => {
    let defaults = ["font-sans"];
    if (as === "code") {
      defaults = defaults.filter((d) => d !== "font-sans");
    }
    return defaults;
  }, [as]);

  return createElement(
    as,
    { className: classNames(...defaults, variantClass, className) },
    children,
  );
};

export default Typography;
