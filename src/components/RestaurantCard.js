import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard=({resList})=>{

    console.log(resList);

    const {loggedInUser}= useContext(UserContext);

    const {cloudinaryImageId,name,locality,cuisines,costForTwo,avgRating,id}= resList?.info
    return (
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300'>
        <img className="rounded-lg  w-[600px]" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{locality}</h4>
        <h4 className="object-fit">{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} Star</h4>
        <h4>User: {loggedInUser}</h4>
        </div>
    );
};


export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div data-testid="resCard">
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;