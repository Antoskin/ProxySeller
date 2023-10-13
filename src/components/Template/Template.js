import React, {Fragment} from 'react';
import Header from "../Header";
import s from './TEmplate.module.scss';

function Template({component: Component}) {
    return (
        <Fragment>
            <Header />
            <div className={s.body}>
                <Component />
            </div>
        </Fragment>

    );
}

export default Template;