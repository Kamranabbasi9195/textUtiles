import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mood has been enabled", "success")
      //for title change text
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mood has been disabled", "success")
      document.title = 'TextUtils - light Mode'
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtile" aboutText="About us" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Textform showalert={showalert} heading="Enter the Text to analyze below" mode={mode}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
