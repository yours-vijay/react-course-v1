import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantmenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  const dummy = 'Dummy Text';

  if (resInfo === null) {
    return <h2>Loading...........</h2>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  // const categories =
  // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //   (c) =>
  //     c.card?.["card"]?.["@type"] ===
  //     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  // );

  console.log(categories);

  return (
    <div className="container py-2">
      <h3>{name}</h3>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h5>Menu:</h5>
      {/* {itemCards.map((item) => {
        return <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price / 100}</li>;
      })} */}
      {/* {itemCards.map((item) => {
        return <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.defaultPrice / 100}</li>;
      })} */}

      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
            dummy={dummy}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
