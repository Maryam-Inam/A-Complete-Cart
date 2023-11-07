import { ChevronUp, ChevronDown } from "../icons";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseAmount,
  decreaseAmount,
} from "../features/cart/cartSlice";
const CartItem = ({ item }) => {
  const { id, title, price, img, amount } = item;
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <p className="item-price">{price}</p>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          Remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseAmount(id))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => dispatch(decreaseAmount(id))}
        >
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
