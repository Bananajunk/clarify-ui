export interface IconProps {
  src: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}
