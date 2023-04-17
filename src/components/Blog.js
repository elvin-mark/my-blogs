import axios from "axios";
import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function Blog({ url }) {
  const [content, setContent] = useState("");
  useEffect(() => {
    axios.get(url).then((e) => {
      setContent(e.data);
    });
  }, []);
  return (
    <ReactMarkdown
      children={content}
      rehypePlugins={[rehypeRaw]}
      remarkGfm={[remarkGfm]}
    ></ReactMarkdown>
  );
}

export default Blog;
