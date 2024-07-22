import { useState,useEffect } from "react";
import { App_logo } from "../utils/constans";
import { Link } from "react-router-dom";

 const Header = () =>{

    const [btnFromReact,setbtnFromReact] = useState("Login");
    console.log("header called")

    useEffect(()=>{
        console.log("UseEffest called");
    },[btnFromReact])
    return (
        <div className="header">
           
                <div className="logo-container"> 
                    <img className="logo" src={App_logo} alt="App-logo" />
                </div>
                <div className="nav">
                        <h4><Link to="/">HOME</Link></h4>
                        <h4><Link to ="/about">About us</Link></h4>
                        <h4><Link to = "/contact">Contact</Link></h4>
                        <h4><Link> Search</Link></h4>
                        <button className="Login" onClick={() =>{
                            btnFromReact === "Login" ? setbtnFromReact("Logout"):setbtnFromReact("Login");
                           console.log(btnFromReact);
                        }}
                        >
                            {btnFromReact}
                        </button>
                </div>
        </div>
    ) 
}

export default Header; 