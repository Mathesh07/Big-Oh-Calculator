import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

const CodeEditor = ({ code, setCode }) => {
  return (
    <div className="code-editor">
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={code => highlight(code || '', languages.javascript, 'javascript')}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          backgroundColor: '#2d2d2d',
          color: '#f8f8f2',
          borderRadius: '10px',
          height: '100vh',
          outline: 'none',
          overflow: 'auto',
        }}
      />
    </div>
  );
};

export default CodeEditor;
