import { Typography } from "../Typography";
import type { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({ header, children, footer }: CardProps) => {
  return (
    <section className="bg-white rounded-sm p-8 shadow-md flex flex-col gap-4">
      {typeof header === "string" ? (
        <Typography as="h2" variant="headingSm">
          {header}
        </Typography>
      ) : (
        header
      )}
      {typeof children === "string" ? (
        <Typography as="p" variant="bodyMd">
          {children}
        </Typography>
      ) : (
        children
      )}
      {footer ? (
        <div className="flex gap-4 justify-end mt-4">{footer}</div>
      ) : null}
    </section>
  );
};

export default Card;
