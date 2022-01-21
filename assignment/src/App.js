import './App.css';
import HomePage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import DATA from './components/homepage/data';

function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
            user && user._id?<HomePage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>
            }
            </Route>

          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
            </Route>

          <Route path="/register">
            <Register />
            </Route>

            <Route path="/givendata">
            <DATA />
            </Route>
            <Route path="/data">
            <DATA />
            </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
