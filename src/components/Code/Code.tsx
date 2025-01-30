import { Typography } from "../Typography";
import type { CodeProps } from "./Code.types";

const Code: React.FC<CodeProps> = ({ children }: CodeProps) => {
  return (
    <Typography as="code" className="bg-gray-100 px-4 rounded-sm">
      {children}
    </Typography>
  );
};

export default Code;
