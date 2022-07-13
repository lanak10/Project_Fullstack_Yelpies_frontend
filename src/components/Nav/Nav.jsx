import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Nav = ( {handleChange, handleSubmit, query} ) => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Yelpies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex w-50" role="search" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} value={query}/>
                            <button className="btn btn btn-danger" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">For Businesses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Write a Review</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Restaurants
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Delivery</a></li>
                                    <li><a className="dropdown-item" href="#">Reservations</a></li>

                                </ul>
                            </li>
                        </ul>
                        <ul className="">
                            <button className="btn btn-outline-secondary">
                                <Link className="nav-link" to="/login">Log In</Link>
                            </button>
                            <button className="btn btn-danger ms-2">
                                <Link className="nav-link" to="/signup">Sign Up</Link>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
