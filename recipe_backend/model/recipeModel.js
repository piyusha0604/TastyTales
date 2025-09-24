const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipe: String, 
  description: String,
    ingredients: String,
    imageUrl: String,
    author: String
  }
, {
  timestamps: true
});

const Recipe = mongoose.model('recipes', recipeSchema);

module.exports = Recipe;
