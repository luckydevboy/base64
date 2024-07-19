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

type Props = {
  trigger: ReactNode;
};

const ResultDialog = ({ trigger }: Props) => {
  const handleClick = () => {
    toast("Copied to clipboard.", {
      icon: <CheckCircle className="w-5 h-5" />,
    });
  };

  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <div>
              <span className="font-bold">Filename:</span>{" "}
              <code>file_name.pdf</code>
            </div>
            <div>
              <span className="font-bold">Filesize:</span> 44.6kb
            </div>

            <div className="mt-4" style={{ height: 80 }}>
              <div className="mb-2">
                For use in <code>img</code> element
              </div>
              <div className="absolute inset-x-4 overflow-hidden dark:bg-muted/40 bg-muted/80 p-4 rounded-lg">
                <code className="block">
                  Loremipsumdolorsitamet,consecteturadipisicingelit.Expeditaipsumnostrumofficiis.
                </code>
                <Button
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  variant="outline"
                  size="icon"
                  onClick={handleClick}
                >
                  <Clipboard className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="mt-4" style={{ height: 80 }}>
              <div className="mb-2">
                For use as CSS <code>background</code>
              </div>
              <div className="absolute inset-x-4 overflow-hidden dark:bg-muted/40 bg-muted/80 p-4 rounded-lg">
                <code className="block">
                  Loremipsumdolorsitamet,consecteturadipisicingelit.Expeditaipsumnostrumofficiis.
                </code>
                <Button
                  className="absolute right-4 top-1/2 -translate-y-1/2"
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
