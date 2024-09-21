
import { useContext } from 'react';
import {IMG_URL} from '../utils/constans';
import UserContext from '../utils/UserContext';
const Resturantcard = (props) =>{
    const {resData} = props;
    // console.log(resData);
    
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;
    const {logedInUser} = useContext(UserContext);
    return (
        <div data-testid="resCard" className="rescard">
                <div className="img-container">
                    <img className ="id"src={IMG_URL+cloudinaryImageId} alt="xyz" />
                </div>
                <div className="text">
                        <h3>{name}</h3>
                        <h5>{costForTwo}</h5>
                        <h5>⭐{avgRating + "⌛"+ sla.deliveryTime}Minutes</h5>
                        <h6>{cuisines.join(",")}</h6>
                        <h6>{logedInUser}</h6>
                     
                </div>
        </div>
    )
}
export const withPromoted = (Resturantcard) =>{
    return (props) => {
        return (
            <div>
                <label className="">Veg</label>
                <Resturantcard {...props}/>
            </div>
        )
    }
}
export default Resturantcard;
