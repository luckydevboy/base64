"use client";

import { CloudUpload } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

type Props = {
  onChange: (files: File[]) => void;
};

const UploadZone = ({ onChange }: Props) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="px-4 text-center cursor-pointer flex flex-col gap-y-4 items-center justify-center h-36 rounded-lg bg-muted/40 border border-dashed border-black/40 dark:border-white/40"
    >
      <input {...getInputProps()} />
      <CloudUpload className="h-6 w-6" />
      <div>Click to upload or drag and drop</div>
    </div>
  );
};

export default UploadZone;
