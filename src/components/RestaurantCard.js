
import {CDN_URL} from '../utils/constants'

const RestaurantCard =(props)=> {
    const {resData} = props;
    const {name, cuisines, avgRating } = resData?.info;
    const {slaString} = resData?.info.sla;
    console.log(props);
      return <div className="card" style={{width: '15rem'}}>
      <img className="card-img-top" alt="..." src={CDN_URL +
      resData.info.cloudinaryImageId} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className='text-info'>{cuisines.join(', ')}</h6>
        <h6 className='text-warning'>{avgRating}</h6>
        <p className="card-text text-dark" style={{fontSize:'14px'}}>{slaString}</p>
      </div>
    </div>
  }

export default RestaurantCard;