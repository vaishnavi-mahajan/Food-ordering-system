import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mock_data";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

/**
 * Super power variable or STATE variable
  REACT HOOK known as useState()
  React hook is basically normal JS function   || REACT SUPERPOWER OR UTILITY FUNC

  -- State variable
  1.1 const[list] = useState([]);
  1.2 const[list] = useState(null);
  1.3 const[list] = useState('aman');

  -- Normal JS variable
  1.1 let list = [];
  1.2 let list = null;
  1.3 let list = 'aman';

  */

const Body = () => {
//   const[list, setList] = useState([
//     {
//       data: {
//         "id": "531480",
//         "name": "Rollsking",
//         "avgRating": "3.3",
//         "cloudinaryImageId": "ts2jcaq0vadhut1ccoow"
//       }
//     },
//     {
//       data: {
//         "id": "53180",
//         "name": "Desi dhaba",
//         "avgRating": "2.0",
//         "cloudinaryImageId": "y9wnicph1o0ebmmsjsau"
//     }
//   }
// ]);
  
//const[list, setList] = useState(resList);
const[list, setList] = useState([]);

const[filterRestaurant, setFilterRestaurant] = useState(list);
const[searchText, setSearchText] = useState("");

  //if dependency array is empty [], Will only render once the component got render .
  //if no dependency array , => useEffect() is called on every render .
  //if dependency array is [list] => useEffect() called everytime when list got updated.
  useEffect(()=>{
    //fetch Data here. 
    fetchData();
  }, []);

//   const apiKey = process.env.REACT_APP_SWIGGY_API;
 
  const fetchData = async () => {
   // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true');
    const data = await fetch(process.env.REACT_APP_SWIGGY_API);
    const json = await data.json();
    console.log("apiData", json?.data.cards[2]);
    //below written code is not a good way to write code , please use optional chaining
    //setList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);

    //Optional chaining: 
    console.log("text", json?.data?.cards);
    setList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  //console.log("ResList", resList);

  //Conditional rendering
  // if(list.length === 0) {
  //   return <Shimmer />;
  // }

    return list.length === 0 ? <Shimmer /> :  (
        <>
        <div className="body">
            <div className="filter">
              {/**
               * Search bar
               */}
              <div className="search">
                {/**
                 * We bind the input type text to the variable with empty string . 
                 * And as input changes we need to update state variable
                 */}
                <input type="text" 
                className="search-box" 
                value={searchText} 
                onChange={(e)=>{
                  setSearchText(e.target.value)
                }} />
                <button onClick={() => {
                  //Implement filter the restaurant cards and update UI
                  //Need the search text over here from input box and bind the value of input text to local state variable.
                  console.log(searchText);
                  const filterRestaurant = list.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  //setList(filterRestaurant);
                  setFilterRestaurant(filterRestaurant);
                }}>Search Button</button>
              </div>
              
              {/*Print high rating value only*/}
                <button 
                className="filter-btn"
                onClick={()=>{
                  //Write filter out to get avgRating > 4
                  const filterList = list.filter(restaurant=>restaurant.info.avgRating>3);
                  setList(filterList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
              {
                /**
                 * USE MAP FUNCTION
                 *  <RestaurantCard resList= {resList[0]} />
                <RestaurantCard resList= {resList[1]} />
                <RestaurantCard resList= {resList[2]} />
                <RestaurantCard resList= {resList[3]} />
                 */

                filterRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id} resList={restaurant}/>)

              }  
               
                
            </div>
        </div>
        </>
    )
}

export default Body;