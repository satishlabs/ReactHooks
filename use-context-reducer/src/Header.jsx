import { useCart } from "./CartContext";

export default function Header() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <header className="page-header">
      <div>
        <p className="eyebrow">React lab</p>
        <h1>Context and reducer</h1>
        <p className="lede">
          The product list and the cart read the same state. Buttons dispatch
          actions, and the reducer returns the next cart.
        </p>
      </div>
      <div className="cart-summary">
        <span>{cart.length} {cart.length === 1 ? "item" : "items"}</span>
        <strong>₹{total.toLocaleString("en-IN")}</strong>
      </div>
    </header>
  );
}
