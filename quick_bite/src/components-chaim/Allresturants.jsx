import React, { useState, useEffect } from 'react'
import { db } from './firebase-config'
import { collection, getDocs } from "firebase/firestore";
import Vector from './pic/chevron-right.png'
import moreVertical from './pic/more-vertical.png'
// import './Allrestuarants.css'
import SingleTest from './SingleTest';
import Footer from './Footer';
import SingleRestaurant from './components-meir/SingleRestaurant';




export default function AllRestaurants() {
    const [rest, setRest] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const handleRestaurantClick = (restaurant) => {
        setSelectedRestaurant(restaurant);
    }

    
const SingleRestaurant1 = ({ restaurant }) => {
    return (
      <div>
        <h2>{restaurant.name}</h2>
        <h1>זה עובד</h1>
        <img src={restaurant.img} alt="" />
        {/* רנדר פרטים נוספים של המסעדה */}
        <SingleRestaurant key={restaurant}/>
      </div>
    );
  };
  
  const AllRestaurants1 = ({ restaurants, onRestaurantClick }) => {
    return (
      <div>
        {restaurants.map((item) => (
          <button onClick={() => onRestaurantClick(item)} key={item.id}>
              <div key={item.name} id="card-5" className='rounded-lg w-[143px] m-1 text-center bg-[#bddaf1] hover:blur-sm' >
                  <img src={item.img} className=' border-[#0065b7] rounded-lg ' alt="" />
                  <h3>{item.name}</h3>
              </div>          
          </button>
        ))}
      </div>
    );
  };




    // const [rest, setRest] = useState([]);

    useEffect(() => {
        const download = async () => {
            
            const emptyList = [];
            const querySnapshot = await getDocs(collection(db, "Restaurants"));
            querySnapshot.forEach((doc) => {
                // console.log(emptyList);
                emptyList.push({ name: doc.data().name, img: doc.data().img, id:doc.data().id });
                // console.log(emptyList);
            });
            setRest(emptyList);
            // console.log(emptyList);

        };

        download();
        console.log(rest);
    }, []);

    return (
        <div>
            <div id="containerAllResturants" className='bg-[#bddaf17f] w-[360px] flex content-center flex-col p-6' >
                <div id='hederPayment' className='flex place-content-between '>
                    <img id='return' src={moreVertical} alt="" />
                    <h3 id='textHeader'>Restaurants </h3>
                    <a href="/HomePage" rel="noopener noreferrer" >
                        <img id='return' src={Vector} style={{ width: 24 }} alt="" /></a>
                </div>
                {/* <div id="subContainer" className='mt-10 flex flex-wrap'>
                    {rest.map((item) => (
                        <a href="/" rel="noopener noreferrer" >
                            <div key={item.name} id="card-5" className='rounded-lg w-[143px] m-1 text-center bg-[#bddaf1] hover:blur-sm' >
                                <img src={item.img} className=' border-[#0065b7] rounded-lg ' alt="" />
                                <h3>{item.name}</h3>
                            </div></a>
                    ))}
                </div> */}


        <div>
            {selectedRestaurant ? (
                <SingleRestaurant1 restaurant={selectedRestaurant} />
            ) : (
                <AllRestaurants1 restaurants={rest} onRestaurantClick={handleRestaurantClick} />
            )}
    </div>



            </div>  
            <div >
                <Footer />
            </div>

        </div >
    );
}



