import type { TypographyProps } from "./Typography.types";

import { createElement, useMemo } from "react";
import { classNames } from "~/utilities";

import { Variant } from "./Typography.types";
const Typography: React.FC<TypographyProps> = ({
  variant,
  as = "p",
  className,
  children,
}: TypographyProps) => {
  const variantClass = useMemo(() => {
    switch (variant) {
      case Variant.Heading2Xl:
        return "text-6xl";
      case Variant.HeadingXl:
        return "text-5xl";
      case Variant.HeadingLg:
        return "text-4xl";
      case Variant.HeadingMd:
        return "text-3xl";
      case Variant.HeadingSm:
        return "text-2xl";
      case Variant.HeadingXs:
        return "text-xl";
      case Variant.BodyLg:
        return "text-lg";
      case Variant.BodyMd:
        return "text-md";
      case Variant.BodySm:
        return "text-sm";
      case Variant.BodyXs:
        return "text-xs";
      default:
        return "text-md";
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
