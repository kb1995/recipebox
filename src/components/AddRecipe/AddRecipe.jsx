import React, { Component } from 'react';
import { Input, Label, Centered, AddButton } from './AddRecipe.styled'

class AddRecipe extends Component {
    render() {
        if (this.props.recipeList.title.length === 0) {
            return (
                <Centered>
                    <form>
                        <Label>Recipe Title:</Label>
                        <Input onKeyPress={this.props.handleEnter} onChange={this.props.handleTitle} value={this.props.title} type="text"></Input>
                    </form>
                    <form>
                        <Label>Ingredients (separate by comma):</Label>
                        <Input onKeyPress={this.props.handleEnter} onChange={this.props.handleIngredients} value={this.props.ingredients} type="text"></Input>
                    </form>
                    <AddButton onClick={this.props.handleAddToList}>Add a recipe</AddButton>
                </Centered>
            )
        }
        return (
            <div>
                <form>
                    <Label>Recipe Title:</Label>
                    <Input onKeyPress={this.props.handleEnter} onChange={this.props.handleTitle} value={this.props.title} type="text"></Input>
                </form>
                <form>
                    <Label>Ingredients (separate by comma):</Label>
                    <Input onKeyPress={this.props.handleEnter} onChange={this.props.handleIngredients} value={this.props.ingredients} type="text"></Input>
                </form>
                <AddButton onClick={this.props.handleAddToList}>Add a recipe</AddButton>
            </div>

        );
    }
}

export default AddRecipe;