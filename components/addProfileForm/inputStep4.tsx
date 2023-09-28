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

interface InputStep4Props {
  data: {
    location: string;
  };
  setData: (data: { location: string }) => void;
  formStep: number;
  setFormStep: (step: number) => void;
  handleDeploy: () => void;
  loading: boolean;
  error: boolean;
}

const InputStep4 = ({
  data,
  setData,
  formStep,
  setFormStep,
  handleDeploy,
  loading,
  error,
}: InputStep4Props) => {
  return (
    <Card
      className=" w-[400px] bg-slate-100 dark:bg-zinc-900 border-gray-600 dark:border-gray-600 transition-all duration-500"
      style={{
        display: formStep === 4 ? "block" : "none",
      }}
    >
      <CardHeader>
        <CardTitle>Finally!</CardTitle>
        <CardDescription>
          We just need a little bit more information about you!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Country</Label>
              <Input
                className="bg-slate-200 dark:bg-zinc-950"
                id="location"
                placeholder="Where you're from"
                onChange={(e) => setData({ ...data, location: e.target.value })}
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

export default InputStep4;
