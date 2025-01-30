export enum Variant {
  HeadingXs = "headingXs",
  HeadingSm = "headingSm",
  HeadingMd = "headingMd",
  HeadingLg = "headingLg",
  HeadingXl = "headingXl",
  Heading2Xl = "heading2Xl",
  BodyXs = "bodyXs",
  BodySm = "bodySm",
  BodyMd = "bodyMd",
  BodyLg = "bodyLg",
}

export interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "code";
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}
