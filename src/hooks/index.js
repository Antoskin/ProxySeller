import {useState} from "react";
import {useLocation} from "react-router-dom";
import User from "../services/User";

function useRequest() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    async function getUsers() {
        try {
            const response = await User.fetchUserList()
            setLoading(false)
            return response.data
        } catch (e) {
            setLoading(false)
            setError(e.code)
        }
    }

    return {
        loading, error, getUsers
    }
}

function useReqContent() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {pathname} = useLocation()

    async function onFetch() {
        try {
            const ROUTE = pathname.split('/')[1]
            const onFetch = ROUTE === 'posts' ? User.fetchUserPosts : User.fetchUserAlbums;

            const response = await onFetch()
            setLoading(false)
            return response.data;
        } catch (e) {
            setLoading(false)
            setError(e.code)
        }
    }

    return {
        loading,
        error,
        onFetch
    }
}

function useSort(userList) {
    const [sortedList, setSortedList] = useState([])

    const ascEvent = () => {
        const data = [...userList]
        if (data.length) {
            const res = data.sort((a,b) => a['username'].localeCompare(b['username']))
            setSortedList(res)
        }
    }

    const descEvent = () => {
        const data = [...userList]
        if (data.length) {
            const res = data.sort((a, b) => b['username'].localeCompare(a['username']))
            setSortedList(res)
        }
    }

    const reset = () => {
        setSortedList([])
    }

    return {
        sortedList, ascEvent, descEvent, reset
    }
}

export {useRequest, useReqContent, useSort}