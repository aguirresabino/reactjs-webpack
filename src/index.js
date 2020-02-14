import React from 'react';
import {render} from 'react-dom';

function App(props) {
    return (
        <div>
            <h1>App works!</h1>
        </div>
    );
};

render(
    <App/>,
    document.getElementById('root')
);