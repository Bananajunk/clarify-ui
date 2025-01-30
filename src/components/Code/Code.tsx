import { Typography } from "../Typography";
import type { CodeProps } from "./Code.types";

const Code: React.FC<CodeProps> = ({ children }: CodeProps) => {
  return (
    <span className="inline-block bg-gray-100 px-2 mx-1 rounded-sm">
      <Typography as="code" className="whitespace-pre-wrap">
        {children}
      </Typography>
    </span>
  );
};

export default Code;
