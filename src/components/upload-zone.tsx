import { CloudUpload } from "lucide-react";

const UploadZone = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center h-36 rounded-lg bg-muted/40 border border-dashed border-black/40 dark:border-white/40">
      <CloudUpload className="h-6 w-6" />
      <div>Click to upload or drag and drop</div>
    </div>
  );
};

export default UploadZone;
