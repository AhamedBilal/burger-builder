import React from 'react';
import classes from './BuildControls.module.css'
const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.remove} disabled={props.disable}>Remove</button>
        <button className={classes.More} onClick={props.add}>Add</button>
    </div>
);

export default BuildControl;