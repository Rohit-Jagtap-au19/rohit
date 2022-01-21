import React from 'react';
import Postdata from '../data/Sampledata.json'
import Navbar from './Navbar';



const DATA = ({ setLoginUser }) => {
  return (
    <div className="App">
      <div className="row">
        <Navbar/>
      {Postdata.map((postdetails, index) => {
        return <div className="col-md-3" key={postdetails.id}>
          <div className="card">
          <div className="card-body">
            <h5 >{postdetails.id}. {postdetails.title}</h5>
            <p >{postdetails.body}</p>
            </div>
          </div>
        </div>
      })
    }
    </div>
    </div>
  )
}

export default DATA;