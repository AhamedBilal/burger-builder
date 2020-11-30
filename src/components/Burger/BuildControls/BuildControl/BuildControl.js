import React from 'react';
import classes from './BuildControls.module.css'
const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Remove</button>
        <button className={classes.More}>Add</button>
    </div>
);

export default BuildControl;