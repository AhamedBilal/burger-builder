import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
    let ingredientsTransformed = Object.keys(props.ingredients)
        .map(ingKey => [...Array(props.ingredients[ingKey])]
            .map((_, i) => <BurgerIngredient type={ingKey}  key={ingKey + i} />))
        .reduce((previousValue, currentValue) => previousValue.concat(currentValue),[]);
    if (ingredientsTransformed.length === 0) {
        ingredientsTransformed = <p>Please start adding ingredients</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"}/>
            {ingredientsTransformed}
            <BurgerIngredient type={"bread-bottom"}/>
        </div>
    );
};

export default Burger;