import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateRecipe = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState(null); // start as null
  const navigate = useNavigate();

  // Fetch existing recipe
  useEffect(() => {
    axios
      .get(`http://localhost:4000/recipes/${id}`)
      .then((res) => setRecipeData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/recipes/${id}`, recipeData)
      .then(() => navigate("/"))  
      .catch((err) => console.error(err));
  };

  // Show loading while data is fetching
  if (!recipeData) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h2>Update Recipe</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="recipeName"
            placeholder="Recipe Name"
            value={recipeData.recipe || ''}
            onChange={(e) => setRecipeData({ ...recipeData, recipe: e.target.value })}
            required
          />
          <label htmlFor="recipeName">Recipe Name</label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="description"
            placeholder="Description"
            value={recipeData.description || ''}
            onChange={(e) => setRecipeData({ ...recipeData, description: e.target.value })}
          />
          <label htmlFor="description">Description</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="ingredients"
            placeholder="Ingredients"
            value={recipeData.ingredients || ''}
            onChange={(e) => setRecipeData({ ...recipeData, ingredients: e.target.value })}
          />
          <label htmlFor="ingredients">Ingredients </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            placeholder="Image URL"
            value={recipeData.imageUrl || ''}
            onChange={(e) => setRecipeData({ ...recipeData, imageUrl: e.target.value })}
          />
          <label htmlFor="imageUrl">Image URL</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Author"
            value={recipeData.author || ''}
            onChange={(e) => setRecipeData({ ...recipeData, author: e.target.value })}
          />
          <label htmlFor="author">Author</label>
        </div>

        <button type="submit" className="btn btn-success">
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default UpdateRecipe;
