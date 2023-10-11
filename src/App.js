import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alerts from './components/Alerts';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
       setAlert({
        message: message,
        type: type
       })
       setTimeout(()=>{
        setAlert(null);
      }, 1500);
  }

const toggleMode = ()=> {
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743'
    showAlert("Dark mode has been enabled","success",)
   
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("light mode has been enabled","success")
  }
}

 return (
    <>
    <Navbar title="Textutils"
            home="Home"
            us="About"
            mode={mode}
            toggleMode={toggleMode}
   />
   <Alerts alert={alert}/>
   <div className="container my-3" >
    <TextForm heading = "Enter your text to analyze below" mode={mode} showAlert={showAlert} />
    {/* <About/> */}
   </div>
   </>
  );
}

export default App;
