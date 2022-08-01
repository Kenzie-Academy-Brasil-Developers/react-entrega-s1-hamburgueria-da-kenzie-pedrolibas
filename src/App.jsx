import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/header";
import ProductsList from "./components/ProductsList";
import Global from "./styles/global";
import { CartValue, Main } from "./styles/styles";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setFilteredProducts(res);
      });
  }, []);

  return (
    <div className="App">
      <Global />
      <Header filteredProducts={filteredProducts} setProducts={setProducts} />
      <Main>
        {products.length > 0 ? (
          <ProductsList
            products={products}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
          />
        ) : (
          <CartValue>
            <h2>Produto não encontrado</h2>
          </CartValue>
        )}

        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </Main>
    </div>
  );
}

export default App;
