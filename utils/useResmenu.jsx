import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constans";

const useResmenu = (resid) => {
    const [resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data  = await fetch(MENU_API+resid);
        const json = await data.json();
        setresInfo(json.data);
        console.log(json.data);
    }

    return resInfo;
}
export default useResmenu;