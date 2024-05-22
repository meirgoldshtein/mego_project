// import React from 'react'

// export default function MenuTopping() {

//     return (


//     )
// }

import picture1 from "./pic/pic_eate_2.jpg"
import picture2 from "./pic/Frame 1287.png"
import group10 from "./pic/Group 10.png"
import group9 from "./pic/Group 9.png"
import './MenuTopping.css'
import Footer from './Footer.jsx'



import React, { useState } from 'react';

const AddOnList = () => {
    const [addOns, setAddOns] = useState([
        { id: 1, name: 'Extra Cheese', selected: false },
        { id: 2, name: 'Mushrooms', selected: false },
        { id: 3, name: 'Pepperoni', selected: false },
        { id: 4, name: 'Onions', selected: false },
    ]);

    const toggleAddOn = (id) => {
        setAddOns(
            addOns.map((addOn) =>
                addOn.id === id ? { ...addOn, selected: !addOn.selected } : addOn
            )
        );
    };

    return (
        // return (
        // <div id="container1">
        //     <div >
        //         <img src={picture2} id="image" style={{width:360}} alt="" />
        //         <div id="textSection">
        //             <h3>עוגיית לחמניה</h3>
        //             <h4>לחמניה קצרה, עוגיות שוקולד צ'יפס.</h4>
        //             <h4> וכן שוקולד קטן לטעימות.</h4>
        //         </div>
        //         </div>
        //         <h3>Add-Ons</h3>
        //         <ul>
        //             {addOns.map((addOn) => (
        //                 <li key={addOn.id} style={{ paddingTop: 10, fontSize: 23 }}>
        //                     <label >
        //                     <input
        //                         type="checkbox" style={{ color: "red" }}
        //                         checked={addOn.selected}
        //                         onChange={() => toggleAddOn(addOn.id)}
        //                     />
        //                     {addOn.name}
        //                     </label>
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        <>
            <div id="container1">
                <img src={picture2} id="image" style={{ width: 360 }} alt="" />
                <div id="textSection">
                    <h3>עוגיית לחמניה</h3>
                    <h4>לחמניה קצרה, עוגיות שוקולד צ'יפס.</h4>
                    <h4> וכן שוקולד קטן לטעימות.</h4>
                    <ul style={{marginTop:45}}>
                        <li>
                            <input type="radio" id="chocolate-chip" name="flavor" value="chocolate-chip" />
                            <label for="chocolate-chip">שוקולד צ'יפס</label>
                        </li>
                        <li>
                            <input type="radio" id="cookies-and-cream" name="flavor" value="cookies-and-cream" />
                            <label for="cookies-and-cream">עוגיות עם קרם</label>
                        </li>
                        <li>
                            <input type="radio" id="peanut-butter" name="flavor" value="peanut-butter" checked />
                            <label for="peanut-butter">חמאת בוטנים</label>
                        </li>
                        <li>
                            <input type="radio" id="funfetti" name="flavor" value="funfetti" />
                            <label for="funfetti">יוגורט רגיל</label>
                        </li>
                        <li>
                            <input type="radio" id="red-velvet" name="flavor" value="red-velvet" />
                            <label for="red-velvet">קטיפה אדומה</label>
                        </li>
                        <li>
                            <input type="radio" id="snicker-doodle" name="flavor" value="snicker-doodle" />
                            <label for="snicker-doodle">יוגורט תות</label>
                        </li>
                        <li>
                            <input type="radio" id="white-chocolate" name="flavor" value="white-chocolate" checked />
                            <label for="white-chocolate">שוקולד לבן</label>
                        </li>
                        <li>
                            <input type="radio" id="macadamia" name="flavor" value="macadamia" />
                            <label for="macadamia">מקדמיה</label>
                        </li>
                    </ul>
                    <div id="specialInsructions" style={{marginTop:69}}>
                    {/* <h3 style={{ paddingTop: 46 }}>הוסף הוראות מיוחדות:</h3> */}
                    <label for="special-instructions">הוראות מיוחדות:</label>
                    <textarea id="special-instructions" name="special-instructions" rows="3" placeholder="הזן כאן את ההוראות המיוחדות שלך"></textarea>
                    </div>
                    <div id="totalMenu">
                        <img src={group10} alt="" />
                        <h3 style={{fontWeight: 500}}>3</h3>
                        <img src={group9} alt="" />
                    </div>
                    <button class="checkout-btn">Checkout</button>
                </div>
            </div>

            <Footer />

        </>

    );
};

export default AddOnList;


