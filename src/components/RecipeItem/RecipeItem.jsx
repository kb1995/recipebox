import React, { Component } from 'react';
import { H2, Div, Delete} from './RecipeItem.styled'
import { hot } from 'react-hot-loader'
import IngredientItem from '../IngredientItem/IngredientItem'

class RecipeItem extends Component {
    state = { isVisible: false, }

    handleShow = () => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }))
    }

    render() {
        const recipeItems = this.props.recipe.map((item, idx) => {
            return (
                <IngredientItem key={idx} number={idx} recipe={this.props.recipe} handleEdit={this.props.handleEdit} item={item} />
            )
        });

        if (this.state.isVisible) {
            return (
                <Div>
                    <H2 onClick={this.handleShow}>{this.props.title}</H2>
                    {recipeItems}
                    <Delete onClick={() => { this.props.handleDelete(this.props.number) }}>Delete</Delete>
                </Div>
            )
        }
        return (
            <Div onClick={this.handleShow}>
                <H2>{this.props.title}</H2>
            </Div>
        );
    }
}

export default hot(module)(RecipeItem)