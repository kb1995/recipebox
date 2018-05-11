import React from 'react';
import RecipeItem from '../RecipeItem/RecipeItem'
import {Ul} from './RecipeList.styled'

const RecipeList = (props) => {
    const Recipes = props.recipes.map((item, idx) => {
        return (<RecipeItem handleDelete = {props.handleDelete} handleEdit={props.handleEdit} number={idx} key={idx} title={props.title[idx]} recipe={item} />)
    });
    return (
        <Ul>
            {Recipes}
        </Ul>
    )
}

export default RecipeList;