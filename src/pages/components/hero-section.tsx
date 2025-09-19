import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface HeroSectionProps {
  title: string;
  avatarSrc?: string;
  avatarFallback?: string;
}

export function HeroSection({ 
  title, 
  avatarSrc = "https://github.com/shadcn.png", 
  avatarFallback = "CN" 
}: HeroSectionProps) {
  return (
    <div className="av">
      <Avatar>
        <AvatarImage src={avatarSrc} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <h1>{title}</h1>
    </div>
  );
}
