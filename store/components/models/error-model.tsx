import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useErrorModel } from "@/zustand/error-store";
import { Info } from "lucide-react";

const ErrorModal = () => {
  const { title, message, isOpen, Close } = useErrorModel();

  return (
    <Dialog onOpenChange={Close} open={isOpen}>
      <DialogContent className="">
      <DialogTitle className="text-xl space-y-3 font-semibold flex flex-col items-center justify-center leading-6 text-gray-900">
          <Info className="text-red-600 bg-red-400 bg-opacity-50 rounded-full  text-lg" />
          {title}
        </DialogTitle>
        <div className="px-4 w-full py-3 space-y-3 flex flex-col sm:px-6">
        <p className="text-center">{message}</p>
          <Button
            onClick={() => Close()}
            variant="action"
            className="inline-flex w-full justify-center rounded-md bg-main px-3 py-2"
          >
            Go Back
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorModal;
