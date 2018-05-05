import React, { Component } from 'react';
import { Div } from './App.styled'
import AddRecipe from './components/AddRecipe/AddRecipe'
import { hot } from 'react-hot-loader'

class App extends Component {
  state = {
    title: "",
    ingredients: "",
    recipes: [],
    isClicked: false,
  }

  handleClick = () => {
    this.setState({
      isClicked: true,
    })
  }

  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleIngredients = (e) => {
    this.setState({
      ingredients: e.target.value
    })
  }

  handleAddToList = () => {
    let array = this.state.ingredients.split(',')
    this.setState({
      recipes: array,
    })
  }

  render() {
    if (this.state.isClicked) {
      return (
        <Div>
          <button onClick={this.handleClick}>Add recipe</button>
          <AddRecipe handleTitle={this.handleTitle} handleIngredients={this.handleIngredients} />
          <button onClick = {this.handleAddToList}>Add to you list of recipes</button>
        </Div>
      )
    }
    return (
      <Div>
        <button onClick={this.handleClick}>Add recipe</button>
      </Div>
    );
  }
}

export default hot(module)(App);
