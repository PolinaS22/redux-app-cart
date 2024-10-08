import { useState } from "react"
import { ChangeQuantity } from "../Cart/ChangeQuantity"
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cartSlice";

export const Dish = ({ dish }) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()


    return (
        <div className="dish">
            <img src={`./${dish.img}.jpg`} alt='dish'/>
            <h2>{ dish.name}</h2>
            <p>$ { dish.price }</p>



            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>

            <button onClick={() => dispatch(addItemToCart({dish, quantity}))}>Add to Cart</button>
        </div>
    )
}