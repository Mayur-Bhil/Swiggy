import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSice";
import { useDispatch } from "react-redux";

const Cart = () =>{
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
//SUBSCRIBING
    const cartItems = useSelector((store)=>store.cart.items)

    
    return(
       <div className="cart">
        <h1>Cart</h1>
        <button className="btnn"onClick={handleClearCart}>clear cart</button>
            <div className="">
        {cartItems.length === 0 && <h1>Your Cart is Empty Add Items In cart</h1>}
                <ItemsList items={cartItems}/>
            </div>
       </div>
    )
}

export default Cart;