
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import About from './About';
import ContactUS from './ContactUS';
import ProductDetails from './ProductDetails';
import Login from './Login';

function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Store' element={<Store />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<ContactUS />} />
      <Route path='/product-details/:id' element={<ProductDetails />} />
      </Routes>
      
   
   
    </div>
  );
}

export default App;
