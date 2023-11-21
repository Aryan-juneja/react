import './App.css';
import Nav from './Components/Nav';
import Form from './Components/Form';
import About from './Components/About';

import React, { useState } from 'react'
import Alert from './Components/Alert ';



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState(null);

 
  const togglemode = () =>{
          if(mode == 'light'){
            setmode('dark');
            document.body.style.backgroundColor='#32414f';
            showalert("Dark mode has been enabled","success");
          }
          else{
            setmode('light');
            document.body.style.backgroundColor='white';
            showalert("light mode has been enabled","success");
          }
  
}
  const showalert = (message,type)=>{
        setalert({
          message: message,
          type: type
        })
        setTimeout(() => {
          setalert(null)
        },1500);
  }
  return (
    <>
    <BrowserRouter>
    <Nav Title = 'Zepta' about = 'About us' mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />}>
            </Route>
            <Route path="/" element={<Form Title="Enter text to analyze"  mode={mode} showalert={showalert} />}>
            </Route>
          </Routes>
          
        </div>
  
  
        </BrowserRouter>
    </>
  );
}

export default App;
