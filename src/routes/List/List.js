import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import Filter from "../../components/Filter/Filter";
import SortPanel from "../../components/SortPanel";
import s from './List.module.scss'

function List({search, onFilter, userList, ascEvent, descEvent, onReset}) {
    return (
        <Fragment>
            <div className={s.ctrl}>
                <Filter onFilter={onFilter} />
                <SortPanel ascEvent={ascEvent} descEvent={descEvent} onReset={onReset} />
            </div>
            <div className={s.list}>
                {userList
                    .filter(user => {
                        return search.toLowerCase() === '' ?
                            user : user.name.toLowerCase().includes(search)
                    })
                    .map(user => {
                        return (
                            <div key={user.id} className={s.card}>
                                <div className={s.userInfo}>
                                    <div><span>name:</span> {user.name}</div>
                                    <div><span>username:</span> {user.username}</div>
                                    <div><span>email:</span> {user.email}</div>
                                </div>
                                <div className={s.links}>
                                    <Link to={`/posts/:${user.id}`}>POSTS</Link>
                                    <Link to={`/albums/:${user.id}`}>ALBUMS</Link>
                                </div>
                            </div>
                        )
                })}
            </div>
        </Fragment>

    );
}

export default List;