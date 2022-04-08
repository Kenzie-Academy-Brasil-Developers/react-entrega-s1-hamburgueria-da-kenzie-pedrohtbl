import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.css';
import Cart from './components/Cart';
import axios from "axios"
import { useState, useEffect } from "react"

function App() {

  const [products, setProducts] = useState([])
  const [curentSale, setCurentSale] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() =>{
      const  getProducts = async () =>{
          const response = await axios.get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
          setProducts(response.data)
      }
      getProducts()
  },[])
  

  return (
    <div className="App">
      <Header products={products} setFilteredProducts={setFilteredProducts} filteredProducts={filteredProducts}/>
      <main>
      <ProductList products={filteredProducts.length === 0 ? products : filteredProducts} curentSale={curentSale} setCurentSale={setCurentSale}/>
      <Cart curentSale={curentSale} setCurentSale={setCurentSale}/>
      </main>
      
    </div>
  );
}

export default App;
