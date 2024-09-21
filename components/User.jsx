import { useState ,useEffect} from "react";

const User = ({name,location,contact}) => {

    let [count,setcount] = useState(0);

    useEffect(()=>{
        //API calls
    },[])
    return (
        <div className="User-card">
            <h5>Count : {count}</h5>
            <button onClick={()=>{
                setcount(count+1);
            }} >Add</button>
            <h3>Location : {location}</h3>
            <h2>name  : {name}</h2>
            <h4>contact : {contact}</h4>
        </div>
    )
}

export default User;