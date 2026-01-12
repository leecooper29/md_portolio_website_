import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface HeroSectionProps {
  title: string;
  avatarSrc?: string;
  avatarFallback?: string;
}

export function HeroSection({ 
  title, 
  avatarSrc = "", 
  avatarFallback = "LC" 
}: HeroSectionProps) {
  return (
    <div className="av">
      <Avatar>
        {avatarSrc ? <AvatarImage src={avatarSrc} /> : null}
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <h1 className="type" aria-label={title}>
        {Array.from(title).map((ch, index) => (
          <span
            className="char"
            style={{ animationDelay: `${index * 80}ms` }}
            key={index}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </h1>
    </div>
  );
}
