import { useCart } from "./CartContext";

const products = [
  { id: 1, name: "Laptop", price: 72000 },
  { id: 2, name: "Headphones", price: 2499 },
  { id: 3, name: "Keyboard", price: 1899 },
];

export default function ProductList() {
  const { cart, dispatch } = useCart();

  return (
    <section className="catalog" aria-label="Products">
      <ul>
        {products.map((product) => {
          const added = cart.some((item) => item.id === product.id);

          return (
            <li key={product.id}>
              <div>
                <strong>{product.name}</strong>
                <span>₹{product.price.toLocaleString("en-IN")}</span>
              </div>
              {added ? (
                <button
                  type="button"
                  className="quiet"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: product.id })
                  }
                >
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    dispatch({ type: "ADD_ITEM", payload: product })
                  }
                >
                  Add
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="clear"
        disabled={cart.length === 0}
        onClick={() => dispatch({ type: "CLEAR_CART" })}
      >
        Clear cart
      </button>
    </section>
  );
}
