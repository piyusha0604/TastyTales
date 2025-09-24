import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    recipe: '',
    description: '',
    ingredients: '',
    imageUrl: '',
    author: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/recipes', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('Recipe added:', res.data);
      navigate('/'); 
    } catch (err) {
      console.error('Error adding recipe:', err);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow-lg p-4" style={{ width: "500px", borderRadius: "12px" }}>
        <h2 className="text-center mb-4 text-primary"> Add New Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Recipe Name</label>
            <input
              type="text"
              name="recipe"
              value={formData.recipe}
              onChange={handleChange}
              className="form-control"
              placeholder=""
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              rows="3"
              placeholder=""
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Ingredients</label>
            <input
              type="text"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              className="form-control"
              placeholder=""
            />
            <small className="text-muted">Separate ingredients with commas</small>
          </div>

          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="form-control"
              placeholder=""
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 rounded-pill">
             Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
