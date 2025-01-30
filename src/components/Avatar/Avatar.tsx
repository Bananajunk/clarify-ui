import type { AvatarProps } from "./Avatar.types";
import { Icon } from "../Icon";
import { useMemo } from "react";
import { Typography } from "../Typography";

const Avatar: React.FC<AvatarProps> = ({ icon, initials }: AvatarProps) => {
  const content = useMemo(() => {
    if (icon) return <Icon src={icon} size="xl" />;
    if (initials)
      return (
        <Typography as="span" variant="headingSm">
          {initials}
        </Typography>
      );
    return null;
  }, [icon, initials]);
  return (
    <span className="flex items-center justify-center rounded-sm bg-gray-100 w-fit p-4">
      {content}
    </span>
  );
};

export default Avatar;
