import React from 'react';
import {Link} from "react-router-dom";
import s from './Template.module.scss'

function Header(props) {
    return (
        <div className={s.wrap}>
            <Link className={s.link} to={'/'}>Main</Link>
        </div>
    );
}

export default Header;