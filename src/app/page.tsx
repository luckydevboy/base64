"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UploadCard, UploadZone } from "@/components";
import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);

  return (
    <div className="container">
      <Card className="max-w-[500px] mx-auto my-8">
        <CardHeader>
          <CardTitle>Upload and attach file</CardTitle>
          <CardDescription>
            Attachments wil be a part of this project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UploadZone
            onChange={(files) => {
              setFiles(
                files.map((file) =>
                  Object.assign(file, { preview: URL.createObjectURL(file) }),
                ),
              );
            }}
          />
          {files.length > 0 && (
            <div className="space-y-3 mt-6">
              {files.map((file, index) => (
                <UploadCard file={file} key={`upload-${index}`} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
