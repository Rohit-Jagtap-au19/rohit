import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // wheter dark mode is enable or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled", "success ")
      // document.title = 'TextUtlies - Dark Mode'

      // change title name after certain time 
      //   setInterval(() => {
      //     document.title = 'Created By Rohit'
      //   }, 1500);
      //   setInterval(() => {
      //     document.title = 'Created By Pournima'
      //   }, 2000);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success ")
      // document.title = 'TextUtlies - Light Mode'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text-Utils" AboutTitle="About Us" contactus="Contact Us" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtiles - Word counter, charector counter, Remove Extra Spaces" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
