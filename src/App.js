import ProductList from "./components/product/ProductList";
import CountryList from "./components/country/CountryList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList />
      <CountryList />
    </div>
  );
}

export default App;
