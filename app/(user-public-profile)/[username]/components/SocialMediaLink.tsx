import { AiFillInfoCircle } from "react-icons/ai";
import { BsFillPlayFill, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaPaypal, FaRedditAlien } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const types = (type: string) => {
  switch (type) {
    case "twitter":
      return <BsTwitter size={30} />;
    case "youtube":
      return <BsFillPlayFill size={30} />;
    case "linkedin":
      return <GrLinkedinOption size={30} />;
    case "reddit":
      return <FaRedditAlien size={30} />;
    case "instagram":
      return <BsInstagram size={30} />;
    case "paypal":
      return <FaPaypal size={30} />;
    default:
      return <AiFillInfoCircle size={30} />;
  }
};

type Props = {
  type: string;
  link: string;
};

const SocialMediaLink = ({ type, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-1.5 border border-slate-700 bg-gradient-to-br bg-blue-600 rounded-lg flex items-center justify-center"
    >
      {types(type)}
    </a>
  );
};

export default SocialMediaLink;
