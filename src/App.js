import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <Navbar title="Textutils"
            home="Home"
            us="About"
   />
   <div className="container my-3" >
    <TextForm heading = "Enter your text to analyze below"/>

   </div>
   </>
  );
}

export default App;
