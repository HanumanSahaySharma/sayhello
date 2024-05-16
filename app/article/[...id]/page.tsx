import Comments from "@/components/Comments";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { LucideHeart, LucideMessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <article className="py-20">
      <Container className="max-w-[800px]">
        <div className="mb-2 flex items-center gap-2">
          <Link
            href="/"
            className="px-4 py-1.5 text-sm rounded-full dark:text-zinc-400 dark:hover:text-zinc-200 text-zinc-600 bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:text-zinc-800 hover:bg-white transition-all whitespace-nowrap"
          >
            Technology
          </Link>
        </div>
        <h1 className="font-semibold text-[28px] dark:text-zinc-200 mb-4">
          AI-Generated Summaries Are a Problem for Authors and Society as a Whole
        </h1>
        <div className="grid grid-cols-12 mb-8">
          <div className="flex items-center col-span-8">
            <Image
              width="40"
              height="40"
              alt="image"
              className="rounded-full"
              src="https://miro.medium.com/v2/da:true/resize:fill:48:48/0*3r5Mw_wEmV5LvEPf"
            />
            <div className="pl-4">
              <div className="font-medium dark:text-zinc-200">Alex Woon</div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-500 dark:text-zinc-400">Published on May 12, 2024</span>
                <span className="font-medium text-zinc-500 dark:text-zinc-400">•</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">8 min read</span>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex items-center justify-end gap-2">
            <Button className="px-3 py-2 rounded text-zinc-600 hover:text-zinc-800 hover:bg-zinc-200 dark:hover:text-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700">
              <LucideMessageCircle size={18} />
            </Button>
            <Button className="px-3 py-2 rounded text-zinc-600 hover:text-zinc-800 hover:bg-zinc-200 dark:hover:text-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700">
              <LucideHeart size={18} />
            </Button>
          </div>
        </div>
        <figure>
          <Image
            width="800"
            height="440"
            alt="image"
            className="rounded"
            src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa39a0f2e-92ee-46b4-b1bf-8e1fbac32618_1152x640.jpeg"
          />
          <figcaption className="text-zinc-500 dark:text-zinc-400 pt-4 text-center text-sm">
            Image (ironically) generated by AI.
          </figcaption>
        </figure>
        <p>
          Readers and publishers can now easily get artificial intelligence to produce summaries and simplified versions
          of texts and books. These AI-generated products may have their uses, but if readers rely on them as
          substitutes for the originals, that’s a problem not just for authors but for society as a whole.
        </p>
        <p>
          In a recent post on his Substack, college instructor Mark Watkins wrote about experimenting with AI “reading
          assistants” in his writing courses for first-year students. His students were thrilled by the assistants’
          ability to quickly summarize texts.
        </p>
        <p>
          But Watkins—who trains other faculty members in AI literacy and is something of an AI expert—found himself
          perturbed. The summaries, he wrote, were “focused on speed and task completion over nurturing developing
          skills or honing existing ones.” (My thanks to Scott Newstok, an English professor at Rhodes College, for
          alerting me to Watkins’ post.)
        </p>
        <p>
          According to Watkins, similar summarization apps are being heavily promoted on social media and targeted to
          students. And he says that “for $5 a month, anyone is now able to summarize and query a PDF using Adobe's AI
          Assistant.”
        </p>
        <p>
          Apps can also be used to lower the reading level of a text. One of the social media posts reproduced on
          Watkins’ blog shows a downcast female student who is thinking, “I wish someone could explain this to me like
          I’m five.”
        </p>
        <Comments />
      </Container>
    </article>
  );
};

export default page;
