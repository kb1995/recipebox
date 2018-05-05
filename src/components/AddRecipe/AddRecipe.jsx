import React, { Component } from 'react';

class AddRecipe extends Component {
    render() {
        return (
            <div>
                <form>
                    <h3>Recipe Title:</h3>
                    <input onChange={this.props.handleTitle} type="text"></input>

                    <h3>Ingredients:</h3>
                    <input onChange={this.props.handleIngredients} type="text"></input>
                </form>
            </div>
        );
    }
}

export default AddRecipe;