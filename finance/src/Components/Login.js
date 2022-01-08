import React,{useState} from 'react'
import { NavLink } from "react-router-dom"
const Login = () => {
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    let name,value;
    const handelInputs = (event)=>{
        name = event.target.name;
        value = event.target.value;

        setUser({...user,[name]:value});
        console.log(event.target.value)
    }
    return (
        <>
            <div className="container ">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" id="email" value={user.email} onChange={handelInputs} placeholder='Your Email'/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label" value={user.password} onChange={handelInputs}>Password</label>
                        <input type="password" name='password'value={user.password} onChange={handelInputs} className="form-control" id="password"/>
                    </div>
                    
                    <div className="col-12">
                    <input type="submit" className="form-submit" name='singin' id='signin' value='Log In'/>
                        {/* <button type="submit" className="btn btn-primary" name='singin' id='signin' value='register'>Sign in</button> */}
                    </div>
                </form>
            </div>
        </>
    )
}


export default Login