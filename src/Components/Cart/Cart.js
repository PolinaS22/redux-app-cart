import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";

export const Cart = () => {
    const cartItems = useSelector(getCartItems);

    const totalPrice = useSelector(getTotalPrice);

    return (
        <div>
            <h3>TOTAL: $ {totalPrice}</h3>
            <img alt='cart' className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"/> 
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
        </div>
    )
}