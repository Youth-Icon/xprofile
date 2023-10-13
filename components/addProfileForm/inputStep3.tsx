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
import { Label } from "@/components/ui/label";
interface InputStep3Props {
  data: {
    links: string[];
  };
  setData: (data: { links: string[] }) => void;
  formStep: number;
  setFormStep: (step: number) => void;
  linkCount: number;
  setLinkCount: (count: number) => void;
  handleDeploy: () => void;
  loading: boolean;
  error: boolean;
}

const InputStep3 = ({
  data,
  setData,
  formStep,
  setFormStep,
  linkCount,
  setLinkCount,
  handleDeploy,
  loading,
  error,
}: InputStep3Props) => {
  return (
    <Card
      className="h-fit sm:w-[400px] w-full mx-2 bg-slate-100 dark:bg-zinc-900 border-gray-600 dark:border-gray-600 transition-all duration-500"
      style={{
        display: formStep === 3 ? "block" : "none",
      }}
    >
      <CardHeader>
        <CardTitle>It&apos;s almost over!</CardTitle>
        <CardDescription>Maybe you wanna share more link?</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {Array.from({ length: linkCount }).map((_, index) => (
              <div key={index} className="flex flex-col space-y-1.5">
                <Label htmlFor={`link${index}`}>Link {index + 1}</Label>
                <Input
                  className="bg-slate-200 dark:bg-zinc-950"
                  id={`link${index}`}
                  placeholder={`Link ${index + 1}`}
                  onChange={(e) => {
                    const updatedLinks = [...data.links];
                    updatedLinks[index] = e.target.value;
                    setData({ ...data, links: updatedLinks });
                  }}
                  value={data.links[index] || ""}
                />
              </div>
            ))}
            <Button type="button" onClick={() => setLinkCount(linkCount + 1)}>
              Add more link?
            </Button>
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
          onClick={handleDeploy}
          disabled={loading ? true : false}
          className={`active:scale-90 ${loading && `cursor-not-allowed`}`}
        >
          {loading ? "Deploying..." : "Deploy"}
        </Button>
        {error && (
          <p className="text-red-500 dark:text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </CardFooter>
    </Card>
  );
};

export default InputStep3;
