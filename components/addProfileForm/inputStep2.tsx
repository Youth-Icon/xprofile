import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BsInstagram, BsFillPlayFill } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaRedditAlien, FaPaypal } from "react-icons/fa";

interface InputStep2Props {
  data: {
    socials: {
      name: string;
      link: string;
    }[];
  };
  setData: (data: {
    socials: {
      name: string;
      link: string;
    }[];
  }) => void;
  formStep: number;
  setFormStep: (step: number) => void;
}

const InputStep2 = ({
  data,
  setData,
  formStep,
  setFormStep,
}: InputStep2Props) => {
  return (
    <Card
      className="h-fit sm:w-[400px] w-full mx-2 bg-slate-100 dark:bg-zinc-900 border-gray-600 dark:border-gray-600 transition-all duration-500"
      style={{ display: formStep === 2 ? "block" : "none" }}
    >
      <CardHeader>
        <CardTitle>Almost There!</CardTitle>
        <CardDescription>
          Cool! Let&apos;s add your social media account!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-row space-x-1.5">
              <span className="p-1 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-800 rounded-lg flex items-center justify-center">
                <BsInstagram size={30} className="text-white" />
              </span>
              <Input
                className="bg-slate-200 dark:bg-zinc-950 focus:ring-0"
                id="instagram"
                placeholder="Instagram handle"
                onChange={(e) => {
                  const updatedSocials = [...data.socials];
                  updatedSocials[0].link = e.target.value;
                  setData({
                    ...data,
                    socials: updatedSocials,
                  });
                }}
                value={data.socials[0].link || ""}
              />
            </div>
            <div className="flex flex-row space-x-1.5">
              <span className="p-1 bg-gradient-to-br bg-blue-600 rounded-lg flex items-center justify-center">
                <GrLinkedinOption size={30} className="text-white" />
              </span>
              <Input
                className="bg-slate-200 dark:bg-zinc-950 focus:ring-0"
                id="linkedin"
                placeholder="LinkedIn account"
                onChange={(e) => {
                  const updatedSocials = [...data.socials];
                  updatedSocials[1].link = e.target.value;
                  setData({ ...data, socials: updatedSocials });
                }}
                value={data.socials[1].link || ""}
              />
            </div>
            <div className="flex flex-row space-x-1.5">
              <span className="p-1 bg-gradient-to-br bg-orange-600 rounded-lg flex items-center justify-center">
                <FaRedditAlien size={30} className="text-white" />
              </span>
              <Input
                className="bg-slate-200 dark:bg-zinc-950 focus:ring-0"
                id="reddit"
                placeholder="Reddit account"
                onChange={(e) => {
                  const updatedSocials = [...data.socials];
                  updatedSocials[2].link = e.target.value;
                  setData({ ...data, socials: updatedSocials });
                }}
                value={data.socials[2].link || ""}
              />
            </div>
            <div className="flex flex-row space-x-1.5">
              <span className="p-1 bg-gradient-to-br bg-red-600 rounded-lg flex items-center justify-center aspect-square">
                <BsFillPlayFill size={30} className="text-white" />
              </span>
              <Input
                className="bg-slate-200 dark:bg-zinc-950 focus:ring-0"
                id="youtube"
                placeholder="Youtube Channel"
                onChange={(e) => {
                  const updatedSocials = [...data.socials];
                  updatedSocials[3].link = e.target.value;
                  setData({ ...data, socials: updatedSocials });
                }}
                value={data.socials[3].link || ""}
              />
            </div>
            <div className="flex flex-row space-x-1.5">
              <span className="p-1 bg-gradient-to-br bg-blue-600 rounded-lg flex items-center justify-center">
                <FaPaypal size={30} className="text-white" />
              </span>
              <Input
                className="bg-slate-200 dark:bg-zinc-950 focus:ring-0"
                id="paypal"
                placeholder="Paypal account"
                onChange={(e) => {
                  const updatedSocials = [...data.socials];
                  updatedSocials[4].link = e.target.value;
                  setData({ ...data, socials: updatedSocials });
                }}
                value={data.socials[4].link || ""}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          type="button"
          onClick={() => setFormStep(formStep - 1)}
          variant={"outline"}
        >
          Back
        </Button>
        <Button
          type="button"
          onClick={() => setFormStep(formStep + 1)}
          className="active:scale-90"
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InputStep2;
