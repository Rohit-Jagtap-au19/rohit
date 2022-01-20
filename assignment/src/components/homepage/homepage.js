import React from 'react'
import "./homepage.css"
import DATA from './data'
import { Link } from 'react-router-dom';
const Homepage = ({ setLoginUser }) => {
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
                                <Link className="nav-link" to="/data">Data</Link>
                            </li>
                        </ul>
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlFile1"></label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                            </div>
                        </form>
                        <div >
                            <button onClick={() => setLoginUser({})} className="btn btn-primary">Logout</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* <DATA /> */}
        </>
    )
}

export default Homepage
