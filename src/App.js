import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.css';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <ProductList/>
      <Cart/>
      </main>
      
    </div>
  );
}

export default App;
