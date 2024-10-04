import { createContext } from "react";
import Footer from "../components/Footer";


const UserContext = createContext({
    logedInUser : "default user",
    footer : <Footer/>
});


export default UserContext;