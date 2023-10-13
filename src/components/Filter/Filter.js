import React from 'react';
import s from './Filter.module.scss';

function Filter({onFilter}) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <input className={s.wrap} type="text" placeholder="Search name" onChange={onFilter} />
        </form>
    );
}

export default Filter;