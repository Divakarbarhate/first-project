import { Metadata } from "next";
import { CiCreditCard2 } from "react-icons/ci";
import { Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

export const metaData: Metadata = {
  title: "Home Page",
  description: "This is the home page of the website",
};

const home = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Alert>
          {/* <Terminal className="h-4 w-4" /> */}
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
};
export default home;
