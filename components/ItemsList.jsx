import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constans";
import { addItems } from "../utils/cartSice";

const ItemsList = ({items,dummy}) => {
    console.log(items);
    console.log(dummy);

    const dispatch = useDispatch();
const handleAddItems = (item)=>{
    //dispatch an action
    dispatch(addItems(item))
}

    return (
        <div>
            {items.map((item)=>(
                <div data-testid ="foodItems" className="item" key={item.card.info.id}>

                    <img src={IMG_URL+item.card.info.imageId} alt="" /> 
                    <div className="btn"><button className="add"onClick={() => handleAddItems(item)}>Add +</button></div>
                    <span>{item.card.info.name}</span>

                    <span> ₹{item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    
                    <p className="desc">
                        {item.card.info.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
export default ItemsList;