import React, {Component} from 'react';
import classes from './BurgerIngredient.module.css'
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}/>;
                break;
            case ('bread-top'):
                ingredient = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}/>
                    <div className={classes.Seeds2}/>
                </div>;
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}/>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}/>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}/>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}/>;
                break;
            default:
                ingredient = null;
                break;
        }
        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.oneOf(['bread-bottom', 'bread-top', 'meat', 'bacon', 'cheese', 'salad']).isRequired
}

export default BurgerIngredient;