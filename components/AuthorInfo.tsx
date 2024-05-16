import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const AuthorInfo = () => {
  return (
    <div className="py-4 mb-8 border-t border-t-zinc-300 dark:border-t-zinc-700 border-b border-b-zinc-300 dark:border-b-zinc-700">
      <h2 className="font-semibold text-2xl mb-5">About the author</h2>
      <div className="flex gap-4">
        <div>
          <Image
            width="64"
            height="64"
            alt="image"
            className="rounded-full min-w-12"
            src="https://miro.medium.com/v2/da:true/resize:fill:48:48/0*3r5Mw_wEmV5LvEPf"
          />
        </div>
        <div className="">
          <div className="flex justify-between">
            <div>
              <div className="text-xl font-medium">Simon George</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-300">2.4K Followers</div>
            </div>
            <Button size="sm" className="rounded text-white bg-red-1 hover:bg-red-2 transition-all">
              Follow
            </Button>
          </div>
          <div className="text-zinc-500 dark:text-zinc-300 mt-2">
            I write poetry, fiction, and non-fiction. In 2021, I published my debut book "The Truth Behind The Smile" a
            self-help guide for your mental health based on my personal experience with depression. Go check it out.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
