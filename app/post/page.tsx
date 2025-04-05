"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PostForm } from "@/components/post-form";
import { Navbar } from "@/components/navbar";

export default function PostPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Post a New Skill
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PostForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
