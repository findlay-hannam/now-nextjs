import React, { Component } from 'react';
import recipes from '../resources/recipes';
import { List, ListItem, Typography, Button } from '@material-ui/core';

function Recipe({
  name,
  ingredients,
  method,
  photo,
}) {
  return (
    <Typography>
      <img style={{ height: 150 }} src={photo} />
      <h2>{name}</h2>
      <h3>Ingredients:</h3>
      <List dense>
        {ingredients.map((ingredient, idx) => <ListItem key={idx}>{ingredient}</ListItem>)}
      </List>
      <h3>Method:</h3>
      <List dense>
        {method.map((step, idx) => <ListItem key={idx}>{step}</ListItem>)}
      </List>
    </Typography>
  );
}

export default class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      selectedRecipe: "Chocolate Cake",
    }
  }
  render() {
    const recipeToRender = recipes.find(recipe => recipe.name === this.state.selectedRecipe);
    return (
      <div>
        <nav style={{ overflow: 'hidden' }}>
          {recipes.map(({ name }) => <Button variant="outlined" key={name} onClick={() => this.setState({ selectedRecipe: name})}>{name}</Button>)}
        </nav>
        {recipeToRender && <Recipe {...recipeToRender} />}
      </div>
    );  
  }
}
