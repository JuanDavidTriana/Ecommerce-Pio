import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <nav className="navbar"> 
            <Link to="/">Home</Link>
            {localStorage.getItem("token") ? (
              <>
                <link to="/admin">admin</link>
                <button onClick={handleLogout}>Logout</button>
              </>
            ): (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </> 
            )
            }
        </nav>
    )
    }

export default Navbar