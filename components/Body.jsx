import { useState, useEffect, useCallback, useContext } from "react";
import Resturantcard, { withPromoted } from "./Resturantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Footer from "./Footer";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfResturants, SetlistOfResturants] = useState([]);
  const [filterdRestutrant, setfilterdRestutrant] = useState([]);
  const [Searchtext, setSearchtext] = useState([]);

  const ResturantCardPromoted = withPromoted(Resturantcard);

  // console.log("body Render",listOfResturants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    SetlistOfResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterdRestutrant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false)
    return <h1>You Are offline ! Please Check Your Internet Connection</h1>;

  const { logedInUser, setuserName } = useContext(UserContext);

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          data-testid="serchinput"
          className="searchbar"
          type="text"
          value={Searchtext}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
          placeholder="Samosa near Me"
        />
        <button
          className="resfil"
          onClick={() => {
            // console.log(Searchtext);

            const filterdRestutrant = listOfResturants.filter((res) =>
              res.info.name
                .toLowerCase()
                .trim()
                .includes(Searchtext.toLowerCase().trim())
            );
            setfilterdRestutrant(filterdRestutrant);
          }}
        >
          Search
        </button>

        <div className="filter">
          <button
            data-testid="filterbtn"
            className="filter"
            onClick={() => {
              const FilteredList = listOfResturants.filter(
                (res) => res.info.avgRating > 4
              );
              setfilterdRestutrant(FilteredList);
              // console.log(FilteredList);
            }}
          >
            top Resturants
          </button>
        </div>
        <div className="input">
          <label htmlFor="username">username</label>
          <input
            value={logedInUser}
            onChange={(e) => setuserName(e.target.value)}
            type="text"
            id="username"
            placeholder="username"
          />
        </div>
      </div>

      <div className="res-container">
        {filterdRestutrant.map((resturants) => (
          <Link
            key={resturants.info.id}
            to={"resturants/" + resturants.info.id}
          >
            {resturants.info.veg ? (
              <ResturantCardPromoted resData={resturants} />
            ) : (
              <Resturantcard resData={resturants} />
            )}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

//Higher Ordered Function

// input = rescasrd == > rscard Promoted

export default Body;
