import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import AddRecipe from './components/AddRecipe/AddRecipe'
import RecipeList from './components/RecipeList/RecipeList'
import { Flex, Div1, Div2 } from './theme/grid'



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
      this.state.recipeList.title.push(this.state.title);
      this.state.recipeList.ingredients.push(array);

      this.setState({
        title: "",
        ingredients: "",
        recipes: array,
        finalTitle: this.state.title,
      })
    }

  }

  handleAddToList = () => {
    let array = this.state.ingredients.split(',').filter(function (e) { return e });
    this.state.recipeList.title.push(this.state.title);
    this.state.recipeList.ingredients.push(array);

    this.setState({
      title: "",
      ingredients: "",
      recipes: array,
      finalTitle: this.state.title,
    })
  }

  handleDelete = (idx) => {
    this.setState({
      recipeList: {
        title: this.state.recipeList.title.filter(item => { return item !== this.state.recipeList.title[idx] }),
        ingredients: this.state.recipeList.ingredients.filter(item => { return item !== this.state.recipeList.ingredients[idx] })
      }
    })
  }

  handleEdit = (idx, recipes,text) => {

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
      <Flex>
        <Div1 >
          <AddRecipe handleEnter={this.handleEnter} title={this.state.title} ingredients={this.state.ingredients} handleTitle={this.handleTitle} handleIngredients={this.handleIngredients} />
          <button onClick={this.handleAddToList}>Add to you list of recipes</button>
        </Div1>
        <Div2>
          <RecipeList
            handleDelete={this.handleDelete.bind(this)}
            handleEdit={this.handleEdit.bind(this)}
            title={this.state.recipeList.title}
            recipes={this.state.recipeList.ingredients} />
        </Div2>
      </Flex>

    );
  }
}

export default hot(module)(App);
