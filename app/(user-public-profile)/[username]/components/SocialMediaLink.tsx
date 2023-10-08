import {
  AiFillGithub,
  AiFillInfoCircle,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const icons = (icon: string) => {
  const className = "text-4xl";

  switch (icon) {
    case "twitter":
      return <BsTwitter className={className} />;
    case "github":
      return <AiFillGithub className={className} />;
    case "linkedin":
      return <AiFillLinkedin className={className} />;
    case "reddit":
      return <AiFillRedditCircle className={className} />;
    case "instagram":
      return <AiOutlineInstagram className={className} />;
    default:
      return <AiFillInfoCircle className={className} />;
  }
};

type Props = {
  icon: string;
  link: string;
};

const SocialMediaLink = ({ icon, link }: Props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icons(icon)}
    </a>
  );
};

export default SocialMediaLink;
