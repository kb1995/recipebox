import React, { Component } from 'react';
import { Div } from './App.styled'
import AddRecipe from './components/AddRecipe/AddRecipe'

class App extends Component {
  state = {
    title: "",
    ingredients: "",
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

  render() {
    if (this.state.isClicked) {
      return (
        <Div>
          <button onClick={this.handleClick}>Add recipe</button>
          <AddRecipe handleTitle={this.handleTitle} handleIngredients={this.handleIngredients} />
          {console.log(this.state.ingredients)}
          {console.log(this.state.title)}
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

export default App;
