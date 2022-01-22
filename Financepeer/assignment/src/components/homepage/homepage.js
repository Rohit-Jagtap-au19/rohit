import React from 'react'
import "./homepage.css"
import Navbar from './Navbar';
import Upload from '../upload/upload';



const Homepage = ({ setLoginUser }) => {
    return (
        <>
            <Navbar />
            <div className='logout' >
                <button className="btn btn-primary" onClick={() => setLoginUser({})} >Logout</button>
            </div>
            <Upload/>
            
            
        </>
    )
}

export default Homepage;