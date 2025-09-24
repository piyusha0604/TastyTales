const express = require('express');
const { addRecipe, getAllRecipes, getRecipeById, updateRecipe, delRecipe } = require('../controller/recipeController');

const routes = express.Router();

// Create
routes.post('/', addRecipe);

// Read all
routes.get('/', getAllRecipes);

// Read one
routes.get('/:id', getRecipeById);

// Update
routes.put('/:id', updateRecipe);

// Delete
routes.delete('/:id', delRecipe);

module.exports = routes;
