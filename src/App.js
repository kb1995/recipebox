import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import AddRecipe from './components/AddRecipe/AddRecipe'
import RecipeList from './components/RecipeList/RecipeList'
import { Flex  } from './theme/grid'
import {Heading, AddButton, Div1, Div2} from './App.styled'



class App extends Component {
  state = {
    title: "",
    ingredients: "",
    finalTitle: "",
    recipes: [],
    recipeList: {
      title: [],
      ingredients: [],
    },
  }

  // local storage 
  componentWillMount() {
    let local = localStorage.getItem("items")
    local = JSON.parse(local)

    if (local) {
      this.setState({
        recipeList: local.recipeList
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("items", JSON.stringify(nextState))
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

  handleEnter = (e) => {
    if (e.which === 13) {
      let array = this.state.ingredients.split(',').filter(function (e) { return e });
      let newTitle = this.state.title.charAt(0).toUpperCase() + this.state.title.slice(1);
      this.state.recipeList.title.push(newTitle);
      this.state.recipeList.ingredients.push(array);
  
      this.setState({
        title: "",
        ingredients: "",
        recipes: array,
        finalTitle: newTitle,
      })
    }
  }

  handleAddToList = () => {
    let array = this.state.ingredients.split(',').filter(function (e) { return e });
    let newTitle = this.state.title.charAt(0).toUpperCase() + this.state.title.slice(1);
    this.state.recipeList.title.push(newTitle);
    this.state.recipeList.ingredients.push(array);

    this.setState({
      title: "",
      ingredients: "",
      recipes: array,
      finalTitle: newTitle,
    })
  }

  handleDelete = (index) => {
    this.setState({
      recipeList: {
        title: this.state.recipeList.title.filter((item, idx) => { return idx !== index }),
        ingredients: this.state.recipeList.ingredients.filter((item, idx) => { return idx !== index })
      }
    })
  }

  handleEdit = (idx, recipes, text) => {

    recipes[idx] = text;

    this.setState({
      title: "",
      ingredients: "",
      recipes: recipes,
      finalTitle: this.state.title,
    })

  }

  render() {
    return (
      <div>
        <Heading>A place where you can store the ingredients for your tasty recipes!</Heading>
        <Flex>
          <Div1 >
            <AddRecipe recipeList = {this.state.recipeList} handleAddToList = {this.handleAddToList} handleEnter={this.handleEnter} title={this.state.title} ingredients={this.state.ingredients} handleTitle={this.handleTitle} handleIngredients={this.handleIngredients} />
          </Div1>
          
          <Div2>
            <RecipeList
              handleDelete={this.handleDelete.bind(this)}
              handleEdit={this.handleEdit.bind(this)}
              title={this.state.recipeList.title}
              recipes={this.state.recipeList.ingredients} />
          </Div2>
        </Flex>
      </div>
    );
  }
}

export default hot(module)(App);
