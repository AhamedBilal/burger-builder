import React from 'react';
import Pux from "../../hoc/Pux";
import classes from './Layout.module.css';

const layout = (props) => (
    <Pux>
        <div>Toolbar</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Pux>
);

export default layout;