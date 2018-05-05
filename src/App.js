import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { Div } from './App.styled'
import AddRecipe from './components/AddRecipe/AddRecipe'
import RecipeList from './components/RecipeList/RecipeList'


class App extends Component {
  state = {
    title: "",
    finalTitle: "",
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
      finalTitle: this.state.title,
    })
  }

  render() {
    if (this.state.isClicked) {
      return (
        <Div>
          <button onClick={this.handleClick}>Add recipe</button>
          <AddRecipe handleTitle={this.handleTitle} handleIngredients={this.handleIngredients} />
          <button onClick={this.handleAddToList}>Add to you list of recipes</button>
          <RecipeList title = {this.state.finalTitle} recipes = {this.state.recipes}/>
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
