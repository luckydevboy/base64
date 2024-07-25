"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clipboard } from "lucide-react";
import { toast } from "sonner";
import { ReactNode } from "react";
import { useCopyToClipboard } from "react-use";
import { formatBytes } from "@/lib/utils";

type Props = {
  trigger: ReactNode;
  base64: string;
  file: File & { preview: string };
};

const ResultDialog = ({ trigger, base64, file }: Props) => {
  const [{ error }, copyToClipboard] = useCopyToClipboard();

  const handleClick = () => {
    copyToClipboard(base64);

    if (!error) {
      toast("Copied to clipboard.", {
        icon: <CheckCircle className="w-5 h-5" />,
      });
    }
  };

  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <div>
              <span className="font-bold">Filename:</span>{" "}
              <code>{file.name}</code>
            </div>
            <div>
              <span className="font-bold">Filesize:</span>{" "}
              {formatBytes(file.size)}
            </div>

            <div className="mt-4" style={{ height: 80 }}>
              <div className="mb-2">
                For use in <code>img</code> element
              </div>
              <div className="absolute inset-x-4 overflow-hidden whitespace-nowrap dark:bg-muted/40 bg-muted/80 p-4 rounded-lg">
                <code className="block">{base64}</code>
                <Button
                  className="absolute right-1 top-1/2 -translate-y-1/2"
                  variant="outline"
                  size="icon"
                  onClick={handleClick}
                >
                  <Clipboard className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
    </Dialog>
  );
};

export default ResultDialog;
