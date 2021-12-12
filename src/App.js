import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


function App() {
  return (
<Router>
<div className='App'>
  <Routes>

    <Route exact path='/'element={<Home />}/>
    

     <Route exact path='/about'  element={<About />}/>


    <Route exact path='/contact'  element={<Contact />}/>

  </Routes>
</div>
</Router>
  );
}

export default App;