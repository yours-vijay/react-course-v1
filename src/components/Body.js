import RestaurantCard, { isOpenRestaurantCard } from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofrestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const OpenRestaurantCard = isOpenRestaurantCard(RestaurantCard);

  const {loggedInUser, setUserName} = useContext(UserContext)

    

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4353928&lng=78.3981636&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log(listofrestaurants.length);

  console.log(listofrestaurants);

  if(onlineStatus === false) return <div className="card card-body">Looks like there is not internet connection....</div>


  return listofrestaurants.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <div className="container-fluid pt-2 pb-5">
      <div> 
        <input
          type="text"
          value={searchText}
          placeholder="Search here..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            const filteredRestaurant = listofrestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <button
        type="button"
        className="btn btn-warning my-2"
        onClick={() => {
          console.log(listofrestaurants);
          const filteredRestaurant = listofrestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          // console.log(filteredList);
          // setListOfRestaurants(filteredRestaurant);
          setFilteredRestaurant(filteredRestaurant);
        }}
      >
        Top Restaurants
      </button>

      <div className="my-4">
        <label>Label</label>
        <input className="form-control w-25" type="text" value={loggedInUser}
        onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="d-flex flex-wrap gap-3">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (<OpenRestaurantCard resData={restaurant}/>) : (<RestaurantCard resData={restaurant} />)}
            
          </Link>
        ))}
      </div>
    </div>
  );
};


export default Body;
