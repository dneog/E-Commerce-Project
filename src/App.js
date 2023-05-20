
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import About from './About';
import ContactUS from './ContactUS';

function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Store' element={<Store />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactUS />} />
    
      </Routes>
      
   
   
    </div>
  );
}

export default App;
