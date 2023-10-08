import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const LinkPlate = () => {
  return (
    <div className="flex gap-4 items-center cursor-pointer h-16 px-4 w-full md:w-[500px]">
      <div className="max-h-full h-full aspect-square overflow-hidden rounded-full">
        <Image
          src="/youtube.png"
          width={60}
          height={60}
          alt="youtube"
          className="h-full w-full"
        />
      </div>
      <div className="flex-1 py-2 flex items-center justify-between">
        <div className="max-w-full overflow-hidden">
          <div className="font-semibold text-lg">YouTube</div>
          <div className="text-sm text-gray-500">Only Fans YT</div>
        </div>
        <BsArrowRight size={24} />
      </div>
    </div>
  );
};

export default LinkPlate;
