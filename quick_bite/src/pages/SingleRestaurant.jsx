import React from 'react'
import TopeCard from './TopeCard'
import FoodList from './data/foods.json'
import FoodComponent from './FoodComponent'
import db from '../firebase-config';

export default function SingleRestaurant() {
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>

            <TopeCard />

            {FoodList.map((item) =>
                <FoodComponent
                    key={item.id}
                    img={item.imageUrl}
                    name={item.name}
                    description={item.description}
                    price={item.price} />)}

        </div>
    )
}
