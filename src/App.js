import React, { Component } from 'react';
import { Div } from './App.styled'

class App extends Component {
  state = {
    title: "",
    ingredients: "",
    isclicked: false,
  }

  handleClick = () => {
    this.setState({
      isclicked: true,
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
    if (this.state.isclicked) {
      return (
        <Div>
          <button onClick={this.handleClick}>Add recipe</button>
          <form>
            <h3>Recipe Title:</h3>
            <input onChange={this.handleTitle} type="text"></input>

            <h3>Ingredients:</h3>
            <input onChange={this.handleIngredients} type="text"></input>
          </form>
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
