import React from 'react'
import "./homepage.css"
import Postdata from '../data/Sampledata.json'

const Homeage = ({ setLoginUser }) => {
    return (
        <div className="homepage">
            <h1>HomePage</h1>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div>
                {Postdata.map((postdetails, index) => {
                    return <div className="data">
                        <h1>{postdetails.id +" "+ postdetails.title}</h1>
                        <p>{postdetails.body}</p>
                        </div>
                })}
        </div>
    )
}

export default Homeage
