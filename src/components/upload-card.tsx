import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { ResultDialog } from "@/components";
import { useEffect, useState } from "react";

type Props = {
  file: File & { preview: string };
};

const formatBytes = (bytes) => {
  if (bytes < 1024) {
    return `${bytes} B`;
  } else if (bytes < 1024 ** 2) {
    return `${(bytes / 1024).toFixed(2)} KB`;
  } else if (bytes < 1024 ** 3) {
    return `${(bytes / 1024 ** 2).toFixed(2)} MB`;
  } else {
    return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
  }
};

const UploadCard = ({ file }: Props) => {
  const [status, setStatus] = useState<"completed" | "uploading">("uploading");
  const [progress, setProgress] = useState<Progress>();

  useEffect(() => {
    const reader = new FileReader();

    reader.onloadstart = () => {
      setProgress(0);
    };

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setProgress(percentComplete);
      }
    };

    reader.onloadend = () => {
      setProgress(100);
      setStatus("completed");
    };

    reader.readAsArrayBuffer(file);
  }, [file]);

  return (
    <Card className="p-4 flex items-center gap-4">
      <Avatar>
        <AvatarImage
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
        <AvatarFallback>
          {file.name
            .split(" ")
            .map((word) => word[0])
            .join()}
        </AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <code className="text-sm">{file.name}</code>
        <div className="flex justify-between">
          <small className="mb-1 block">
            Size: <code>{formatBytes(file.size)}</code>
          </small>
          {status === "uploading" && <small>30%</small>}
        </div>
        {status === "uploading" && <Progress id="progress" value={30} />}
      </div>
      {status === "completed" && (
        <ResultDialog
          trigger={
            <Button variant="outline" size="icon">
              <Code className="h-4 w-4" />
            </Button>
          }
        />
      )}
    </Card>
  );
};

export default UploadCard;
