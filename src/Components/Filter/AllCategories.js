import { Filter } from "./Filter"

export const AllCategories = () => {
    return (
        <div>
            <h1>What kind of food do you like?</h1>
            {/* map  */}
            {['ITALIAN', 'SEAFOOD', 'SALADS', 'APPETIZERS', 'ALL']
            .map((category, index) => <Filter key={index} category={category}/>)}
            
        </div>
    )
}