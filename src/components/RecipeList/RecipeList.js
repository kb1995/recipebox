import React from 'react';
import RecipeItem from '../RecipeItem/RecipeItem'

const RecipeList = (props) => {
    const Recipes = props.recipes.map((item,idx) => {
        return (<RecipeItem key = {idx} recipe = {item}/>)
    });
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {Recipes}
            </ul>
        </div>
    )
}

export default RecipeList;