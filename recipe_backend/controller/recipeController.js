const recipeModel = require('../model/recipeModel');

// Add new recipe
exports.addRecipe = async (req, res) => {
  try {
    const new_recipe = new recipeModel(req.body);
    const result = await new_recipe.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipeModel.find();
    if (recipes && recipes.length > 0) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({ message: "No recipes found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single recipe
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await recipeModel.findById(req.params.id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update recipe
exports.updateRecipe = async (req, res) => {
  try {
    const updated = await recipeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // ✅ return updated recipe
    );
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete recipe
exports.delRecipe = async (req, res) => {
  try {
    const deleted = await recipeModel.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.status(200).json({ message: "Recipe deleted successfully" });
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
