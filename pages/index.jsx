import {useEffect, useState} from "react";
import Example1 from "../components/Example1";
import Example2 from "../components/Example2";
import Example3 from "../components/Example3";
import Example4 from "../components/Example4";
import Code from "../components/Code";

const examples = [
    {
        component: <Example1 />,
        files: [{
            name: 'Example1.jsx',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/blob/master/components/Example1.jsx',
        }]
    },
    {
        component: <Example2 />,
        files: [{
            name: 'Example2.jsx',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/blob/master/components/Example2.jsx',
        }]
    },
    {
        component: <Example3 />,
        files: [{
            name: 'Example3.jsx',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/blob/master/components/Example3.jsx',
        }]
    },
    {
        component: <Example4 />,
        files: [{
            name: 'Example4.jsx',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/blob/master/components/Example4.jsx',
        }]
    },
];

function IndexPage() {
    const [tab, setTab] = useState(0);
    const [selectedUrl, setSelectedUrl] = useState();

    useEffect(() => {
        setSelectedUrl(examples[tab].files[0].url);
    }, [tab]);

    const handleUrlSelected = (e) => {
        setSelectedUrl(e.target.value);
    }

    return (
        <div className="examples">
            <div className="examples__panel">
                {Array.apply(null, Array(examples.length)).map((_cur, index) => (
                    <button onClick={() => setTab(index)} key={index} style={{ backgroundColor: index === tab ? 'lightgray' : '' }}>{ index + 1 }</button>
                ))}
            </div>
            <div>
                {examples[tab].component}
            </div>
            <div className="examples__sources">
                Files:
                <select className="examples__sources-list" name="fileName" onChange={handleUrlSelected} value={selectedUrl}>
                    {examples[tab].files.map(f => (
                        <option value={f.url} key={f.url}>{f.name}</option>
                    ))}
                </select>
                <Code url={selectedUrl} />
            </div>
        </div>
    );
}

export default IndexPage;
