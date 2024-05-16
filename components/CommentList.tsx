import Image from "next/image";
import { Button } from "./ui/button";
import { LucideHeart, LucideMessageCircle } from "lucide-react";

const CommentList = () => {
  return (
    <div className="relative pl-12">
      <Image
        width="30"
        height="30"
        alt="image"
        className="rounded-full absolute left-0"
        src="https://miro.medium.com/v2/da:true/resize:fill:48:48/0*3r5Mw_wEmV5LvEPf"
      />
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-medium text-zinc-800 dark:text-zinc-200">Alex Woon</span>
          <span className="text-medium text-zinc-600 dark:text-zinc-200">•</span>
          <span className="text-sm text-zinc-500 dark:text-zinc-200">May 12, 2024</span>
        </div>
        <div>
          <p>I love reading and feel so sad for those who don't. There is so much that they bare missing out on.</p>
          <p>
            I hate abridged versions because that seem take out all the uniqueness of a writer's style and vocabulary.
            The writing has no “personality” left. The essence that makes the book engaging and unique is gone.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-200 font-normal p-0 hover:text-zinc-800 hover:underline">
          <LucideHeart size={18} /> <span className="font-medium text-[12px]">LIKE (4)</span>
        </Button>
        <Button className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-200 font-normal p-0 hover:text-zinc-800 hover:underline">
          <LucideMessageCircle size={18} /> <span className="font-medium text-[12px]">REPLY</span>
        </Button>
      </div>
    </div>
  );
};

export default CommentList;
