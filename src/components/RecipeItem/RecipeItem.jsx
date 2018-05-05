import React, { Component } from 'react';

class RecipeItem extends Component {
    render() {
        return (
            <li>
                
                {this.props.recipe}
            </li>
        );
    }
}

export default RecipeItem;