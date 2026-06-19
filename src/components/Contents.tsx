import React from "react";
import "github-markdown-css/github-markdown.css";
import "./Contents.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from 'rehype-highlight'

const Contents: React.FC<{ markdownText: string }> = (props) => {
  return (
    <div className="Contents markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {props.markdownText}
      </ReactMarkdown>
    </div>
  );
};

export default Contents;
