import React from 'react'
// import Vector from './pic/Vector.png'
import Vector from './pic/chevron-right.png'
import moreVertical from './pic/more-vertical.png'
import './Payment.css'
import chevronRight from './pic/chevron-right.png'
import Footer from './Footer'


export default function Payment() {
    return (

        // <div className="container_payment">
        <div className="container_payment">
            <div id='hederPayment'>
                <img id='return'src={moreVertical} alt="" />
                <h3 id='textHeader'>Payment </h3>
                <img id='return' src={Vector} style={{ width: 24 }} alt="" />

            </div>
            <button class="add-btn">
                <img id='imagePayment' src={chevronRight} alt="" />
                <h4>Total: 40.00$</h4>
            </button>
            <div id='creditCard'>
                <input id='inputCards' type="text" placeholder='Name on card' />
                <input id='inputCards' type="text" placeholder='Card number' />
                <input id='inputCards' type="text" placeholder='CVV' />
                <input id='inputCards' type="text" placeholder='Expiry' />
            </div>
            <button class="pay-btn">Complete purchase </button>


            <div id='PayFooter'>
                <Footer/>
            </div>


        </div>
    )
}
