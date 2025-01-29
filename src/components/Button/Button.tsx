import type { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
