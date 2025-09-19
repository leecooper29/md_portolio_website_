import image from "../../assets/Screenshot 2025-08-16 at 8.11.41 PM.png";
interface GithubSectionProps {
  username: string;
  contributions: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function GithubSection({
  username,
  contributions,
  imageSrc,
  imageAlt = "GitHub contributions",
}: GithubSectionProps) {
  return (
    <div className="item-1">
      <h2>Github: {username}</h2>
      <p>{contributions}</p>
      <img src={image} alt="activity image"></img>
    </div>
  );
}
