import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemsList = ({ items, dummy }) => {

  const dispatch = useDispatch();
  const handleAddItem =(item)=>{
    dispatch(addItems(item))
  }

  let item = items.map((item) => {
    // console.log(dummy);

    return (
      <div className="w-100 border-bottom py-2 mb-3" key={item.card.info.id}>
        <div className="border-0 d-flex justify-content-between">
          <div className="col-8">
            <span className="fw-bolder">
              {item.card.info.name} Rs - ({item.card.info.price ? item.card.info.price /100 : item.card.info.defaultPrice / 100})
            </span>
            <p className="fs-6">{item.card.info.description}</p>
          </div>
          <div className="col-4 ms-2 w-25 position-relative"><img className="img-fluid" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+item.card.info.imageId} alt={item.card.info.imageId} />
            <button type="button" className="bg-primary text-white rounded-0 w-100 btn position-absolute bottom-0 end-0"
              onClick={()=>handleAddItem(item)}
            >Add+</button>
          </div>
        </div>
      </div>
    );
  });
  return <div>{item}</div>;
};

export default ItemsList;
