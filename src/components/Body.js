import RestaurantCard ,{withPromotedLabel}from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [searchText,setSearchText]= useState("");
    const [filteredRestaurant,setFilteredRestaurant]= useState([]);

    const RestaurantCardPromoted= withPromotedLabel(RestaurantCard);

    console.log(listOfRestaurants);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5385152&lng=73.8323492&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            
            const json= await data.json();
            // console.log(json);
            setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };

    const onlineStatus= useOnlineStatus();
    if(onlineStatus===false)
            return (<h1>Looks like you are offline,Please check your internet connection</h1>);


            const {setUserName,loggedInUser}= useContext(UserContext);
    // if(listOfRestaurants.length===0){
    //     return <Shimmer/>;
    // }

    return (listOfRestaurants.length===0)? <Shimmer/>: (
        <div className='body'>
            <div className='filter flex'>
            <div className="search m-4 p-4">
                <input data-testid="searchInput" className="border border-solid border-black" type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                }}/>
                <button className="px-4 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    // console.log(searchText);
                    const filteredRestaurant=listOfRestaurants.filter(res=>{
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                    })
                    setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>

            </div>
            <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100" onClick={()=>{
                    const filteredRes= listOfRestaurants.filter(res=>{
                       return res.info.avgRating>4;
                    })
                    setListOfRestaurants(filteredRes);
                }}>Top Rated Restaurant</button>
                </div>
                <div className="search m-4 p-4 flex item-center">
                <label>Username: </label>
                <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>

                </div>
            </div>
            <div className="flex flex-wrap ">
                {
                    filteredRestaurant.map((restaurant)=><Link key={restaurant.info.id} to ={"/restaurants/"+restaurant.info.id}>
                    {
                        restaurant.info.avgRating>4.2?(<RestaurantCardPromoted resList={restaurant}/>):(
                            <RestaurantCard resList={restaurant}/>

                        )
                    }
                    </Link>)
                }
            </div>
        </div>
    );
};

export default  Body;