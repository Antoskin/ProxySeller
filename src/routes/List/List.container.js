import React, {useState, useEffect} from 'react';
import List from "./List";
import {useRequest, useSort} from "../../hooks";

function ListContainer() {
    const [userList, setUserList] = useState([])
    const [search, setSearch] = useState('')

    const {loading, error, getUsers} = useRequest()
    const {sortedList, ascEvent, descEvent, reset} = useSort(userList)


    useEffect(() => {
        getUsers().then(res => setUserList(res))
    }, []);

    if (loading) {
        return (<div>loading</div>)
    }

    if (error) {
        return (<div>{error}</div>)
    }

    const filterHandle = e => {
        setSearch(e.target.value)
    }

    return (
        <List
            search={search}
            onFilter={filterHandle}
            userList={sortedList.length ? sortedList : userList}
            ascEvent={ascEvent}
            descEvent={descEvent}
            onReset={reset}
        />
    );
}

export default ListContainer;