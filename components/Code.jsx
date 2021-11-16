import { useEffect, useState } from "react";
import { idea } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const Code = ({ url }) => {
    const [source, setSource] = useState('');
    const [state, setState] = useState(-1); // -1 - initial, 0 - loading, 1 - done, 2 - error

    useEffect(async () => {
        if (!url) {
            return;
        }

        setState(0);

        try {
            const res = await fetch(url);
            setSource(await res.text());
            setState(1);
        } catch (e) {
            setState(2);
        }
    }, [url]);

    return (
        <>
            {state === -1 && <div>Select file.</div>}
            {state === 0 && <div>Loading code...</div>}
            {state === 1 && (
                <SyntaxHighlighter language="javascript" style={idea} showLineNumbers wrapLines>
                    {source}
                </SyntaxHighlighter>
            )}
            {state === 2 && <div>Loading error.</div>}
        </>
    );
}

export default Code;
