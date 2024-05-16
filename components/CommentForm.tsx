import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const CommentForm = () => {
  return (
    <>
      <h2 className="font-semibold text-2xl mb-4">4 Comments</h2>
      <form className="mb-10">
        <div className="mb-4">
          <Textarea
            rows={6}
            placeholder="Write something here..."
            className="rounded dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:border-zinc-400 dark:focus:border-zinc-400 focus:!ring-offset-0 focus:shadow-none focus:ring-transparent resize-none"
          />
        </div>
        <Button type="submit" className="w-full text-white bg-red-1 hover:bg-red-2 rounded">
          POST
        </Button>
      </form>
    </>
  );
};

export default CommentForm;
