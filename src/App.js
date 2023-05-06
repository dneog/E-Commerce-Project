
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import About from './About';

function App() {
  return (
    <div className="App">
     <Routes>
        
        <Route path='/store' element={<Store />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
     
   
   
    </div>
  );
}

export default App;
