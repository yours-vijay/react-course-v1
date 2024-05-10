import { useEffect, useState } from "react";
import { RES_MENU } from "../utils/constants";

const useRestaurantmenu =(resId)=> {

  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + resId);
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=1234"
    // );
    const json = await data.json();
    setResInfo(json.data);
  };

    return resInfo;
}

export default useRestaurantmenu;