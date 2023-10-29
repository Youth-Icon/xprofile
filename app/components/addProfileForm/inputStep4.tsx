import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
interface InputStep4Props {
  data: {
    username: string;
  };
  setData: (data: { username: string }) => void;
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
      className="h-fit sm:w-[400px] w-full mx-2 bg-slate-100 dark:bg-zinc-900 border-gray-600 dark:border-gray-600 transition-all duration-500"
      style={{
        display: formStep === 4 ? "block" : "none",
      }}
    >
      <CardHeader>
        <CardTitle>One final step!</CardTitle>
        <CardDescription>Choose a unique username!</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="username">Username</Label>
            <Input
                className="bg-slate-200 dark:bg-zinc-950 focus:ring-0"
                id="username"
                placeholder="Username"
                onChange={(e) => {
                    setData({
                        ...data,
                        username: e.target.value,
                    });
                    }
                }
                value={data.username}
            />
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
