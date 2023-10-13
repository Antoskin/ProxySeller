import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import s from './Content.module.scss'

function Content({data}) {
    return (
        <Fragment>
            <Link className={s.back} to={'/'}>Back</Link>
            {data.map(post => ((
                <div key={post.id} className={s.post}>
                    <div className={s.title}>{post.title}</div>
                    {post.body && <div className={s.text}>{post.body}</div>}
                </div>

            )))}
        </Fragment>
    );
}

export default Content;
