import React, { Component } from 'react';
import recipes from '../resources/recipes';
import styled from 'styled-components';

const FoodImage = styled.img`
height: 150px;
`;

const List = styled.ol`
list-style: none;
text-align: initial;
`;
const Li = styled.li`
margin-bottom: 5px;
`;

const RecipeContainer = styled.div`
margin: 10px;
`;


function Recipe({
  name,
  ingredients,
  method,
  photo,
}) {
  return (
    <RecipeContainer>
      <FoodImage src={photo} />
      <h2>{name}</h2>
      <h3>Ingredients:</h3>
      <List>
        {ingredients.map((ingredient, idx) => <Li key={idx}>{ingredient}</Li>)}
      </List>
      <h3>Method:</h3>
      <List>
        {method.map((step, idx) => <Li key={idx}>{step}</Li>)}
      </List>
    </RecipeContainer>
  );
}

const Nav = styled.nav`
overflow: hidden;
`;

const RecipeButton = styled.button`
display: inline;
`;

export default class Sonnets extends Component {
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
        <Nav>
          {recipes.map(({ name }) => <RecipeButton key={name} onClick={() => this.setState({ selectedRecipe: name})}>{name}</RecipeButton>)}
        </Nav>
        {recipeToRender && <Recipe {...recipeToRender} />}
      </div>
    );  
  }
}
