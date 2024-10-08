import { getSelectedCategory } from "../../Redux/dishesSlice";
import { dishesData } from "../data/dataDishes"
import { Dish } from "./Dish";
import { useSelector } from "react-redux";

export const Dishes = () => {

    const selectedCategory = useSelector(getSelectedCategory);


    return (
        <div>
        {dishesData
        .filter( dish => {
            if (selectedCategory === 'ALL') return true
            return selectedCategory === dish.category;
        }
        )
        .map((dish, index) => <Dish key={index} dish={ dish }/>)}
        </div>
    )
}