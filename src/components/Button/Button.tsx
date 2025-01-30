import { Typography } from "../Typography";
import type { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return (
    <button className="bg-blue-500 text-white p-2 rounded-md">
      {typeof children === "string" ? (
        <Typography as="span">{children}</Typography>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
