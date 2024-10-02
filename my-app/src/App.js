
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert(
      {msg:message,
        type:type}
    )
    setTimeout(()=>{
       setAlert(null);},3000
    );
    
  }
  
  const toggleTheme=()=>{
    if(mode==='light')
    {
      setMode('dark');
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      showAlert("Light mode has been enabled","success")
    }
    }
  
  return (
    <>
    <Router>
     <div className="container">
     <Navbar title="TextUtil" mode={mode} toggleTheme={toggleTheme}
     />
     <Alert alert={alert}/>
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
    
    </div>
    </Router>  
     
    </>
    
  );
}

export default App;
