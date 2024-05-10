import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // const [showItems, setShowItems] = useState(false);

  //   console.log(data);
  const handleclick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };
  return (
    <div className="card mb-2">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h6 className="mb-0">
          {data.title} ({data.itemCards.length})
        </h6>
        <button className="btn fs-4" onClick={handleclick}>
          +
        </button>
      </div>
      {showItems && <div className="card-body">
         <ItemsList items={data.itemCards} dummy={dummy}/>
      </div>}
    </div>
  );
};

export default RestaurantCategory;
