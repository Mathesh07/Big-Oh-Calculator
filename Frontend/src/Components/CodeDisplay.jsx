import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeDisplay(props) {
  return (
    <SyntaxHighlighter language={props.language} style={oneDark}>
      {props.code}
    </SyntaxHighlighter>
  );
}
