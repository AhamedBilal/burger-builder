import React, {Component} from 'react';
import Pux from "../../hoc/Pux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {

    render() {
        return (
            <Pux>
                <Burger/>
                <div>Build Controls</div>
            </Pux>
        );
    }
}

export default BurgerBuilder;