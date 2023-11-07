import { useDispatch, useSelector } from "react-redux";
import CartItems from "./components/CartItems";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartItems />
    </main>
  );
}
export default App;
