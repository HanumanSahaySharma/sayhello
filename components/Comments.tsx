import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import AuthorInfo from "./AuthorInfo";

const Comments = () => {
  return (
    <div className="py-10">
      <AuthorInfo />
      <CommentForm />
      <CommentList />
    </div>
  );
};

export default Comments;
