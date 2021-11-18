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
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/master/components/Example1.jsx',
        },{
            name: 'saga.js',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/master/store/example1/saga.js',
        },{
            name: 'reducer.js',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/master/store/example1/reducer.js',
        }]
    },
    {
        component: <Example2 />,
        files: [{
            name: 'Example2.jsx',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/master/components/Example2.jsx',
        },{
            name: 'saga.js',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/master/store/example2/saga.js',
        }]
    },
    {
        component: <Example3 />,
        files: [{
            name: 'Example3.jsx',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/master/components/Example3.jsx',
        },{
            name: 'saga.js',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/master/store/example3/saga.js',
        },{
            name: 'reducer.js',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/master/store/example3/reducer.js',
        }]
    },
    {
        component: <Example4 />,
        files: [{
            name: 'Example4.jsx',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/master/components/Example4.jsx',
        },{
            name: 'saga.js',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/master/store/example4/saga.js',
        },{
            name: 'saga.test.js',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/master/store/example4/saga.test.js',
        },{
            name: 'middleware',
            url: 'https://raw.githubusercontent.com/jekatigr/redux-saga-demo/master/store/index.js',
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
                <hr />
                File:
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
