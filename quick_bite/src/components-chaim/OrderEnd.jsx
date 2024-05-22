import React from 'react'
import Vector from './pic/chevron-right.png'
import moreVertical from './pic/more-vertical.png'
import './OrderEnd.css'
import packageCheck from './pic/package-check.png'
import Footer from './Footer'


export default function OrderEnd() {
    return (
        <div className="container_payment">
            <div id='hederPayment'>
                <img id='return'src={moreVertical} alt="" />
                {/* <h3>Add card</h3> */}
                <img id='return' src={Vector} style={{ width: 24 }} alt="" />
            </div>
            <div id="mainOrder">
                <h2>Order placed!</h2>
                <p>ההזמנה שלך התבצעה בהצלחה, כבר עכשיו אנחנו מכינים את ההזמנה שלך, תיכף נמצא את השליח שימסור לך את ההזמנה!!</p>
            </div>
            <img id="imgPackage"src={packageCheck} alt="" />
            <button class="pay-btn">Add more orders </button>
        <div id='footerEnd'>
            <Footer/>
        </div>
        </div>
    )
}
