import React, {Component} from 'react';
import Pux from "../../hoc/Pux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Pux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Pux>
        );
    }
}

export default BurgerBuilder;