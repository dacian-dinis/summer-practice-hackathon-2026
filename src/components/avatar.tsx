import { Avatar as UiAvatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);
}

type AvatarProps = {
  className?: string;
  fallbackClassName?: string;
  name: string;
  src?: string | null;
};

export function Avatar({
  className,
  fallbackClassName,
  name,
  src,
}: AvatarProps): JSX.Element {
  return (
    <UiAvatar className={className}>
      {src ? <AvatarImage alt={name} src={src} /> : null}
      <AvatarFallback className={fallbackClassName}>
        {getInitials(name)}
      </AvatarFallback>
    </UiAvatar>
  );
}
