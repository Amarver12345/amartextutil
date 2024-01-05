import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [text, settext] = useState('Enable Dark Mode')
  const [alert, setalert] = useState(null)
  function Showalert(message,type){
      setalert({
      msg:message,
      type:type 
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  function toggleMode(){
    if( mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      settext('Enable Light Mode')
      Showalert("Dark Mode Enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      settext('Enable Dark Mode')
      Showalert("Light Mode Enabled","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Home" aboutyou="About" mode={mode} toggleMode={toggleMode} text={text}/>
    <h1>Hello world</h1>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route  path="/" element={<TextForm heading="Enter your text here" mode={mode} Showalert={Showalert}/>}/>
        <Route  path="/about" element={<About />} /> 
      </Routes>
    </div>
    </Router>

    </>
  );
}
export default App;
