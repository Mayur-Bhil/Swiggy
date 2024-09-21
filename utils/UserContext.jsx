import { createContext } from "react";
import Footer from "../components/Footer";
//utility function

const UserContext = createContext({
    logedInUser : "default user",
    footer : <Footer/>
});


export default UserContext;