import RestaurantCard from "./RestaurantCard"; 
import resObj from "../utils/mockData";
import { useState } from "react";


const Body =()=> {

const [listofrestaurants, setListOfRestaurants] = useState(resObj);

console.log(listofrestaurants.length);

    return <div className='container-fluid pt-2 pb-5'>
            {/* <div className='search'>Search</div>     */}
            <button type="button" className="btn btn-warning my-2"
                onClick={()=>{
                    const filteredList = listofrestaurants.filter((res) => res.info.avgRating > 4)
                    // console.log(filteredList);
                    setListOfRestaurants(filteredList);
                }}
            >Top Restaurants</button>

            <div className='d-flex flex-wrap gap-3'>
              {/* <RestaurantCard resData={resObj[0]} />
              <RestaurantCard resData={resObj[1]} />
              <RestaurantCard resData={resObj[2]} />
              <RestaurantCard resData={resObj[3]} /> */}
              {
                listofrestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} /> )
              }
            </div>
        </div>
    }

export default Body;