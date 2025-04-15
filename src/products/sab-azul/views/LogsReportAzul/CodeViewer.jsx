import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './index.module.css';


const CodeViewer = ({ title, code,}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  function formatJson(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed, null, 2); // Indentación de 2 espacios
    } catch (e) {
      e
      return jsonString;
    }
  }
  


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <div className={styles.controls}>
          <button onClick={handleCopy}>
            {copied ? '✅ Copiado' : '📃 Copiar'}
          </button>
        </div>
      </div>
      <div className={styles.codeWrapper}>
        <SyntaxHighlighter
          language={'json'}
          style={oneDark }
          showLineNumbers
        >
          {formatJson(code)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeViewer;
