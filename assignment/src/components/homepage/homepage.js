import React from 'react'
import "./homepage.css"
import Upload from '../upload/upload';
import Navbar from './Navbar';
const Homepage = ({ setLoginUser }) => {
    return (
        <>
            <Navbar />
            <Upload />
            <div className='logout' >
                <button onClick={() => setLoginUser({})} >Logout</button>
            </div>
        </>
    )
}

export default Homepage
