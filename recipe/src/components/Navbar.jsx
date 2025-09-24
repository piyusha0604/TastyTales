import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm" style={{ backgroundColor: '#ff69b4' }}>
                <div className="container">
                    <div className="d-flex align-items-center">
                        <NavLink className="navbar-brand text-white fw-bold me-3" to="/">Tasty Tales</NavLink>
                        <NavLink 
                            className="nav-link text-white fw-semibold px-3 py-2 rounded" 
                            style={{ backgroundColor: '#ff1493' }} 
                            to="/add"
                        >
                           <b>+</b> Add Recipe
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
