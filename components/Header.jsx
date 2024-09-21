import { useState,useEffect,useContext } from "react";
import { App_logo } from "../utils/constans";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

 const Header = () =>{

    const [btnFromReact,setbtnFromReact] = useState("Login");
    // console.log("header called")

    useEffect(()=>{
        // console.log("UseEffest called");
    },[btnFromReact])
    const {logedInUser} = useContext(UserContext);
    console.log(logedInUser);
 // subscribing the store using selector
    const cartItems = useSelector((store)=> store.cart.items)
    console.log(cartItems);
    const OnlineStatus = useOnlineStatus();
    return (
        <header className="header bg-red-50">
           
                <div className="logo-container"> 
                        <Link to="/"> <img  className="logo" src={App_logo} alt="App-logo" /></Link>
                </div>
                <div className="nav">
                        <h5>{OnlineStatus ? "🟢" : "🔴"}</h5>
                        <h4 ><Link to="/">HOME</Link></h4> 
                        <h4><Link to ="/about">About us</Link></h4>
                        <h4><Link to = "/contact">Contact</Link></h4>
                        <h4><Link to = "/grocery">Grocery</Link></h4>
                        <h4><Link> Search</Link></h4>
                        <h4><Link to ="/cart">cart - {cartItems.length}</Link></h4>
                        <h4>{logedInUser}</h4>
                        <button className="Login" onClick={() =>{
                            btnFromReact === "Login" ? setbtnFromReact("Logout"):setbtnFromReact("Login");
                           console.log(btnFromReact);
                        }}
                        >   
                            {btnFromReact}
                        </button>
                </div>
        </header>
    ) 
}

export default Header; 