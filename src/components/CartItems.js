import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

const CartItems = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <ul>
        {cartItems.map((item) => (
          <div key={item.id}>
            <CartItem item={item} />
          </div>
        ))}
      </ul>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
      </footer>
      <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
        CLEAR CART
      </button>
    </section>
  );
};
export default CartItems;
