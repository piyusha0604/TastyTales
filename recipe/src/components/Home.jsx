import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/recipes')
      .then((res) => {
        console.log('Fetched recipes:', res.data);
        setRecipes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="container">
          <h2 className="page-title"> Delicious Recipes </h2>

          {recipes.length === 0 ? (
            <p className="text-center fs-5 text-muted">No recipes available yet. Add one!</p>
          ) : (
            <div className="row g-4 justify-content-center">
              {recipes.map((recipe) => (
                <div className="col-md-4 col-sm-6" key={recipe._id}>
                  <div className="card recipe-card shadow-lg">
                    <img
                      className="card-img-top recipe-img"
                      src={recipe.imageUrl || 'https://via.placeholder.com/300'}
                      alt={recipe.recipe}
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title fw-bold text-pink">{recipe.recipe}</h4>
                      <p className="card-text text-muted">
                        {recipe.description ? recipe.description.substring(0, 100) : 'No description'}...
                      </p>
                      <NavLink to={`/${recipe._id}`} className="btn btn-pink mt-2">
                        View Recipe
                      </NavLink>
                    </div>
                    <div className="card-footer text-center small text-muted">
                      By {recipe.author || 'Anonymous'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .home-container {
          background: #FFB6C1; /* Solid baby pink */
          min-height: 100vh;
          padding: 50px 20px;
        }
        .page-title {
          text-align: center;
          color: #d63384;
          font-weight: 700;
          margin-bottom: 40px;
          font-family: 'Poppins', sans-serif;
          font-size: 2.5rem;
        }
        .recipe-card {
          border-radius: 18px;
          overflow: hidden;
          background: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .recipe-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 12px 25px rgba(214, 51, 132, 0.2);
        }
        .recipe-img {
          height: 220px;
          object-fit: cover;
          border-bottom: 3px solid #ffb6c1;
        }
        .text-pink {
          color: #d63384;
        }
        .btn-pink {
          background: linear-gradient(90deg, #ff69b4, #d63384);
          border: none;
          color: white;
          font-weight: 600;
          padding: 10px 18px;
          border-radius: 50px;
          transition: 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }
        .btn-pink:hover {
          background: linear-gradient(90deg, #d63384, #ff69b4);
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
};

export default Home;
