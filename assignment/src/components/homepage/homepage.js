import React from 'react'
import "./homepage.css"
import DATA from './data'

const Homepage = ({ setLoginUser }) => {
    return (
        <>
            <div className="homepage">
                <h1>HomePage</h1>
                <button onClick={() => setLoginUser({})} className="btn btn-primary">Logout</button>
            </div>
            <DATA />
        </>
    )
}

export default Homepage
