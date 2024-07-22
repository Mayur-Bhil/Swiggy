import { useState,useEffect } from "react";
import Resturantcard from "./Resturantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () =>{
    console.log("body Render");

    const [listOfResturants,SetlistOfResturants] = useState([]);
    const [filterdRestutrant,setfilterdRestutrant] = useState([]);
    const [Searchtext,setSearchtext] = useState([]);
    
    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data  =  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json);
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        SetlistOfResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterdRestutrant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
 
    return listOfResturants.length ===0 ? <Shimmer/> : (
        <div className="body">
            <div className="search">
                <input className="searchbar" type="text" value={Searchtext} onChange={(e)=>{
                    setSearchtext(e.target.value)
                }} placeholder="Samosa near Me"/>
                <button className="resfil" onClick={() => {
                  
                        console.log(Searchtext); 

                  const filterdRestutrant = listOfResturants.filter((res)=>
                        res.info.name.toLowerCase().trim().includes(Searchtext.toLowerCase().trim())
                );
                        setfilterdRestutrant(filterdRestutrant);
                }} >Search</button>
            
             <div className="filter">
                        <button className="filter" onClick={()=>{
                            const FilteredList = listOfResturants.filter((res) => res.info.avgRating>4);
                         SetlistOfResturants(FilteredList);
                            console.log(FilteredList);
                        }
                    }>
                         top Resturants
                        </button>
                    </div>``
                </div>
                   <div className="res-container">
                    {filterdRestutrant.map((resturants) => (
                            <Link key = {resturants.info.id} to = {"resturants/"+resturants.info.id}> <Resturantcard  resData = {resturants}/></Link>
    ))}
                   </div>
        </div>            
    )
}

export default Body;