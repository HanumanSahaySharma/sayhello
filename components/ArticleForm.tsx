"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "./ui/button";

const ArticleForm = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-full bg-white dark:bg-zinc-800 rounded p-6 lg:p-10 shadow-xl">
      <h1 className="font-bold text-3xl text-zinc-800 dark:text-zinc-200 mb-8">Create Post</h1>
      <form>
        <div className="mb-8">
          <Label className="mb-4 block font-medium">Title</Label>
          <Input
            type="text"
            className="rounded dark:bg-zinc-900/50 border-zinc-400 dark:border-zinc-500 focus:border-zinc-500 dark:focus:border-zinc-400 focus:!ring-offset-0 focus:shadow-none focus:ring-transparent"
          />
        </div>
        <div className="mb-8">
          <Label className="mb-4 block font-medium">Topic</Label>
          <Select>
            <SelectTrigger className="rounded dark:bg-zinc-900/50 border-zinc-400 dark:border-zinc-500 focus:border-zinc-500 dark:focus:border-zinc-400 focus:!ring-offset-0 focus:shadow-none focus:ring-transparent">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="rounded rounded-t-none border-zinc-300 dark:border-zinc-500 bg-zinc-100 dark:bg-zinc-800 group">
              <SelectItem value="light" className="dark:group:hover:bg-zinc-300">
                Light
              </SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-8">
          <Label className="mb-4 block font-medium">Upload Image</Label>
          <div className="rounded p-4 dark:bg-zinc-900/50 border border-dashed border-zinc-400 dark:border-zinc-500 focus:border-zinc-500 dark:focus:border-zinc-400">
            <Input type="file" id="file" className="hidden" />
            <Label
              htmlFor="file"
              className="flex items-center justify-center font-normal text-zinc-500 dark:text-zinc-300"
            >
              Drag and drop file OR{" "}
              <span className="font-medium text-red-1 cursor-pointer pl-2 dark:text-zinc-200 hover:underline">
                Browse here
              </span>
            </Label>
          </div>
        </div>
        <div className="mb-8">
          <Label className="mb-4 block font-medium">Content</Label>
          <ReactQuill placeholder="Write something here..." value={value} onChange={setValue} />
        </div>
        <Button type="submit" size="lg" className="w-full text-white bg-red-1 hover:bg-red-2 rounded">
          PUBLISH
        </Button>
      </form>
    </div>
  );
};

export default ArticleForm;
