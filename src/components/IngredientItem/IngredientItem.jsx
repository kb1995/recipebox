import React, { Component } from 'react';
import { Input } from './IngredientItem.styled'

class IngredientItem extends Component {
    state = { text: this.props.item, }

    handleChange = (e) =>{
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <Input onChange = {this.handleChange}
                value={this.state.text}
                onKeyUp={() => { this.props.handleEdit(this.props.number, this.props.recipe,this.state.text) }}
            >
            </Input>
        )
    }
}

export default IngredientItem;