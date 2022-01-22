import React from 'react'
import "./homepage.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/givendata">Given Data</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <DATA /> */}
        </>
    )
}

export default Navbar