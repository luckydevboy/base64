import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { ResultDialog } from "@/components";
import { useEffect, useState } from "react";
import { formatBytes } from "@/lib/utils";

type Props = {
  file: File & { preview: string };
};

const UploadCard = ({ file }: Props) => {
  const [status, setStatus] = useState<"completed" | "uploading">("uploading");
  const [progress, setProgress] = useState(0);
  const [base64, setBase64] = useState("");

  useEffect(() => {
    const reader = new FileReader();

    reader.onloadstart = () => {
      setProgress(0);
    };

    reader.onload = (event) => {
      setBase64(String(event.target.result).replace(/\s+/g, ""));
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

    reader.readAsDataURL(file);
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
        <code className="text-sm line-clamp-1">{file.name}</code>
        <div className="flex justify-between">
          <small className="mb-1 block">
            Size: <code>{formatBytes(file.size)}</code>
          </small>
          {status === "uploading" && <small>30%</small>}
        </div>
        {status === "uploading" && <Progress id="progress" value={progress} />}
      </div>
      {status === "completed" && (
        <ResultDialog
          trigger={
            <Button className="flex-shrink-0" variant="outline" size="icon">
              <Code className="h-4 w-4" />
            </Button>
          }
          base64={base64}
          file={file}
        />
      )}
    </Card>
  );
};

export default UploadCard;
