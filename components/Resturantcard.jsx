
import {IMG_URL} from '../utils/constans';
const Resturantcard = (props) =>{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;
    return (
        <div className="rescard">
                <div className="img-container">
                    <img className ="id"src={IMG_URL+cloudinaryImageId} alt="xyz" />
                </div>
                <div className="text">
                        <h3>{name}</h3>
                        <h5>{costForTwo}</h5>
                        <h5>⭐{avgRating + "⌛"+ sla.deliveryTime}Minutes</h5>
                        <h6>{cuisines.join(",")}</h6>
                </div>
        </div>
    )
}

export default Resturantcard;