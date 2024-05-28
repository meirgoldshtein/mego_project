import React, { useState, useEffect } from 'react'
import { db } from './firebase-config'
import { collection, getDocs } from "firebase/firestore";
import Vector from './pic/chevron-right.png'
import moreVertical from './pic/more-vertical.png'
import './Allrestuarants.css'
import SingleTest from './SingleTest';
export default function AllRestaurants() {
    const [rest, setRest] = useState([]);
  
    useEffect(() => {
      const download = async () => {
        console.log("ASD");
        const emptyList = [];
        const querySnapshot = await getDocs(collection(db, "Restaurants"));
        querySnapshot.forEach((doc) => {
          emptyList.push({ name: doc.data().name, img: doc.data().img });
        });
        setRest(emptyList);
        console.log(emptyList);
        
      };
  
      download();
      console.log(rest);
    }, []);
  
    return (
      <div id="containerAllResturants">
        <div id='hederPayment'>
          <img id='return' src={moreVertical} alt="" />
          <h3 id='textHeader'>Restaurants </h3>
          <img id='return' src={Vector} style={{ width: 24 }} alt="" />
        </div>
        <div id="subContainer">
          {rest.map((item) => <SingleTest key={item.name} img={item.img} name={item.name} />)}
        </div>
        {/* <button onClick={download}>download</button> */}
    
      </div>
    );
  }
// let restaurants = []

// const RestaurantsList = () =>  {
//     const [restaurants, setRestaurants] = useState([]);
//     useEffect(() => {
//         const fatchRestaurants = async () => {
//             const restaurantsCollection = firebase.firestore().collection('Restaurants');
//             const snapshot = await restaurantsCollection.get();
//             const RestaurantsData = snapshot.docs.map((doc) => ({
//                 name:doc.data().name,
//                 img:doc.data().img,

//             }));
//             setRestaurants(RestaurantsData);
//         };
//         fatchRestaurants();
//     },[]);

// }
// RestaurantsList()
// export default function allRestaurants(props) {
//   return (
//     RestaurantsList.map(restaurant) => (restaurant.name)
//     // <div>
//     //     <div id="card">
//     //         <img src={props.image} alt="" />
//     //         <h4>{props.name}</h4>
//     //     </div>
//     // </div>
//   )
// }
