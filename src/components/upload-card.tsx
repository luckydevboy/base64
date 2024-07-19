import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { ResultDialog } from "@/components";

type Props = {
  status?: "uploading" | "completed";
  progress?: number;
};

const UploadCard = ({ status, progress }: Props) => {
  return (
    <Card className="p-4 flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <div>file_name.pdf</div>
        <div className="flex justify-between">
          <small className="mb-1 block">Size: 44.6kb</small>
          {status === "uploading" && <small>40%</small>}
        </div>
        {status === "uploading" && <Progress value={progress} />}
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
