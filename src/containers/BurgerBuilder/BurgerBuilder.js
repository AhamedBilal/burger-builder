import React, {Component} from 'react';
import Pux from "../../hoc/Pux";

class BurgerBuilder extends Component {

    render() {
        return (
            <Pux>
                <div>Burger</div>
                <div>Build Controls</div>
            </Pux>
        );
    }
}

export default BurgerBuilder;