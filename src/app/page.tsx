"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UploadCard, UploadZone } from "@/components";

export default function Home() {
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
          <UploadZone />
          <h1 className="mt-6 mb-3">2 files uploading...</h1>
          <div className="space-y-3">
            {[
              { status: "uploading", progress: 43 },
              { status: "completed" },
            ].map((item, index) => (
              <UploadCard
                key={index}
                status={item.status}
                progress={item.progress}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
