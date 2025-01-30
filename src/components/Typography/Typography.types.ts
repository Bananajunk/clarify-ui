type Variant =
  | "headingXs"
  | "headingSm"
  | "headingMd"
  | "headingLg"
  | "headingXl"
  | "heading2Xl"
  | "bodyXs"
  | "bodySm"
  | "bodyMd"
  | "bodyLg";

export interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "code";
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}
