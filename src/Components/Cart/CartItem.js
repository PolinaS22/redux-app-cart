import { useDispatch } from "react-redux"
import { dishesData } from "../data/dataDishes"
import { removeItemFromCart } from "../../Redux/cartSlice";


export const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();


    const dishes = dishesData.find(item => item.id === cartItem.itemId)

    return (
        <div>
            <p>{ dishes.name }, { cartItem.quantity } portion(s)</p>
            <p>Price: ${ dishes.price * cartItem.quantity }</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                <img alt='icon' className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
            </span>
        </div>
    )
}