import "./App.css";
import { CartProvider } from "./CartContext";
import Header from "./Header";
import ProductList from "./ProductList";

function App() {
  return (
    <CartProvider>
      <main className="page">
        <Header />
        <ProductList />
      </main>
    </CartProvider>
  );
}

export default App;
