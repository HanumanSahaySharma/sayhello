import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LucideHeart, LucideMessageCircle } from "lucide-react";

const Article = () => {
  return (
    <div className="p-4 border-b border-b-zinc-300 dark:border-b-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center">
          <Image
            width="26"
            height="26"
            alt="image"
            className="rounded-full"
            src="https://miro.medium.com/v2/da:true/resize:fill:48:48/0*3r5Mw_wEmV5LvEPf"
          />
          <span className="font-medium pl-4">Alex Woon</span>
        </div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">May 12, 2024</div>
      </div>
      <div className="grid grid-cols-12 gap-10 mb-4">
        <div className="col-span-8">
          <h3 className="font-medium mb-2 text-xl">
            <Link href="/article/123" className="hover:text-red-1">
              AI-Generated Summaries Are a Problem for Authors and Society as a Whole
            </Link>
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
            Readers and publishers can now easily get artificial intelligence to produce summaries and simplified
            versions of texts and books. These AI-generated products may have their uses, but if readers rely on them as
            substitutes for the originals, that's a problem not just for authors but for society as a whole.
          </p>
        </div>
        <div className="col-span-4">
          <Image
            width="240"
            height="140"
            alt="image"
            className="rounded"
            src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa39a0f2e-92ee-46b4-b1bf-8e1fbac32618_1152x640.jpeg"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="px-4 py-1.5 text-sm rounded-full dark:text-zinc-400 dark:hover:text-zinc-200 text-zinc-600 bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:text-zinc-800 hover:bg-white transition-all whitespace-nowrap"
          >
            Technology
          </Link>
          <span className="text-zinc-500 dark:text-zinc-400 text-sm">5 min read</span>
        </div>
        <div className="flex items-center gap-2">
          <Button className="relative px-3 py-2 rounded text-zinc-600 hover:text-zinc-800 hover:bg-zinc-100 dark:hover:text-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700">
            <LucideMessageCircle size={18} />
            <span className="bg-red-1 text-white rounded-full text-[8px] absolute top-1 right-1 h-4 w-4 flex items-center justify-center">
              24
            </span>
          </Button>
          <Button className="relative px-3 py-2 rounded text-zinc-600 hover:text-zinc-800 hover:bg-zinc-100 dark:hover:text-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700">
            <LucideHeart size={18} />
            <span className="bg-red-1 text-white rounded-full text-[8px] absolute top-1 right-1 h-4 w-4 flex items-center justify-center">
              4
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Article;
