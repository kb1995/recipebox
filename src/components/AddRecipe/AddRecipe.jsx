import React, { Component } from 'react';
import {Input, Label} from './AddRecipe.styled'

class AddRecipe extends Component {
    render() {
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
            </div>

        );
    }
}

export default AddRecipe;