import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, NavLink, useNavigate } from 'react-router-dom';

const ShowRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/recipes/${id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) return;

    axios
      .delete(`http://localhost:4000/recipes/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg border-0 rounded-4" style={{ maxWidth: '650px' }}>
        <img
          src={recipe.imageUrl || 'https://via.placeholder.com/600x350'}
          className="card-img-top rounded-top-4"
          alt={recipe.recipe}
          style={{ height: '350px', objectFit: 'cover' }}
        />
        <div className="card-body p-4">
          <h2 className="card-title text-center mb-3 fw-bold text-primary">
            {recipe.recipe}
          </h2>

          <p className="card-text text-muted">
            <strong className="text-dark"> Description: </strong>
            {recipe.description || 'No description provided.'}
          </p>

          <p className="card-text text-muted">
            <strong className="text-dark"> Ingredients: </strong>
            {recipe.ingredients || 'No ingredients provided.'}
          </p>

          <p className="card-text text-muted">
            <strong className="text-dark"> Author: </strong>
            {recipe.author || 'Anonymous'}
          </p>

          <div className="d-flex justify-content-center mt-4">
            <NavLink
              to={`/update/${id}`}
              className="btn btn-warning px-4 me-3 rounded-3 fw-semibold shadow-sm"
            >
               Update
            </NavLink>

            <button
              onClick={handleDelete}
              className="btn btn-danger px-4 rounded-3 fw-semibold shadow-sm"
            >
               Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRecipe;
