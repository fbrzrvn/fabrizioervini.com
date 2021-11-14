import React from 'react';
import { Components, SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock: Partial<Components & SpecialComponents> = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        PreTag="div"
        showLineNumbers={true}
        wrapLines={true}
        language={match[1]}
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className ? className : ''} {...props}>
        {children}
      </code>
    );
  },
};

export default CodeBlock;
