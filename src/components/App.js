import React from 'react';
import {createHashRouter, RouterProvider} from 'react-router-dom'
import List from "../routes/List";
import Content from "../routes/Content";
import Template from "./Template";

function App(props) {
    const router = createHashRouter([
        {
            path: '/',
            element: <Template component={List} />
        },
        {
            path: '/posts/:id',
            element: <Template component={Content} />
        },
        {
            path: '/albums/:id',
            element: <Template component={Content} />
        },
    ])

    return (
        <RouterProvider router={router} />
    );
}

export default App;