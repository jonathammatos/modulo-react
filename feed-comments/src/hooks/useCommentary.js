import { useState } from "react";

export default function useCommentary() {
  const [comments, setComment] = useState([]);

  const addComment = ({ author, content }) => {
    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author,
      content,
      createdAt: new Date(),
    };

    setComment((state) => [newComment, ...state]);
  };

  return { comments, addComment };
}
