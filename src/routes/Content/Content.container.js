import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Content from "./Content";
import {useReqContent} from "../../hooks";

function ContentContainer() {
    const [data, setData] = useState([])
    const {loading, error, onFetch} = useReqContent()
    const {pathname} = useLocation()

    useEffect(() => {
        onFetch()
            .then(res => {
                const ID = pathname.split(':')[1];
                return res.filter(post => post['userId'] === +ID)
            }).then(res => setData(res))
    }, []);

    if (loading) {
        return (<div>loading</div>)
    }

    if (error) {
        return (<div>{error}</div>)
    }

    return (
        <Content data={data} />
    );
}

export default ContentContainer;