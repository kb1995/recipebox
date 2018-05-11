import React, { Component } from 'react';

class AddRecipe extends Component {
    render() {
        return (
                <form>
                    <h3>Recipe Title:</h3>
                    <input onKeyPress = {this.props.handleEnter} onChange={this.props.handleTitle} value = {this.props.title} type="text"></input>

                    <h3>Ingredients (separate by comma):</h3>
                    <input onKeyPress = {this.props.handleEnter} onChange={this.props.handleIngredients} value = {this.props.ingredients} type="text"></input>
                </form>
        );
    }
}

export default AddRecipe;