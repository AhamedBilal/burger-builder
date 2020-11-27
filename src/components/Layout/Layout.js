import React from 'react';
import Pux from "../../hoc/Pux";

const layout = (props) => (
    <Pux>
        <div>Toolbar</div>
        <main>
            {props.children}
        </main>
    </Pux>
);

export default layout;