import { useState, createContext } from 'react';
import { nikeData } from "./data/nikeData";
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

import './App.css';

// 1. Creating the context
export const ProductContext = createContext(null);

// 2. Wrap the components 
function App() {
  const [data, setData] = useState(nikeData)
  const [cart, setCart] = useState([]);
  return (
   <ProductContext.Provider value={{data, cart, setCart}}>
     <div className="App">
      <Header />
      <ProductList />
      <Footer />
     </div>
   </ProductContext.Provider>
  );
}

export default App;
