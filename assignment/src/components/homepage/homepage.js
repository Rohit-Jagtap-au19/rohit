import React from 'react'
import "./homepage.css"

const Homeage = ({setLoginUser}) =>{
    return(
        <div className="homepage">
            <h1>HomePage</h1>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div>
        </div>
    )
}

export default Homeage
