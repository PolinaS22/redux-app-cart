import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../Redux/dishesSlice";

// useSelector allows us to read the state
// to change category on click we need DISPATCH

export const Filter = ({category}) => {
    const dispatch = useDispatch();

    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            <p onClick={() => dispatch(filterCategory(category))}
            className={selectedCategory === 
            category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>
                {category}
            </p>
        </div>
    )
}