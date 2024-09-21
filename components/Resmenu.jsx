import useResmenu from "../utils/useResmenu";
import ResturantCategory from "./ResturantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

//named import

const Resmenu = () =>{
    
    
    const {resid} = useParams();
    const dummy = "Dummy data";
    const resInfo = useResmenu(resid);

    const [showidx,setshowidx] = useState(null);
    
    if(resInfo === null) return <Shimmer/>;
    
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

        // console.log(categories);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
          {/* acordians  */}
          {/* //controlaed components */}
          {categories.map((categories,idx)=>(<ResturantCategory key={categories?.card?.card?.title} data = {categories?.card?.card} 
            showItems={idx === showidx && true}
            setshowidx = {() => setshowidx(idx)}
            dummy = {dummy}
          />))}
     </div>
    )
} 

export default Resmenu;


//https://www.swiggy.com/city/surat/jalaram-locho-and-khaman-gotalawadi-katargam-rest175281