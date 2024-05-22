import React from 'react'
// import Vector from './pic/Vector.png'
import Vector from './pic/chevron-right.png'
import moreVertical from './pic/more-vertical.png'
import './YourOrders.css'
import Footer from './Footer'
import AppRouter from './Router'



export default function YourOrders() {
    return (
        <div className="containerOrders">
            <div id='hederPayment' style={{marginRight:18}}>
                <img id='return'src={moreVertical} alt="" />
                <h3 id='textHeader'>Your orders</h3>
                <img id='return' src={Vector}  alt="" />
            </div>
            <div id="ordersSection">
            <hr />
                <div id="ordersProduts">
                    <div id='TotalPrice'>
                        <div style={{ display: 'flex' }}>
                            <h3>$14.9</h3>
                        </div>
                        <div>
                            <h3>עוגיית סנדוויץ</h3>
                            <h5>תוספות: שוקולד לבן, חמאת בוטנים.</h5>
                            <h5>וכן קינוח פירות  טרופי.</h5>
                        </div>
                    </div>
                </div>
                <hr />
                <div id="ordersProduts">
                    <div id='TotalPrice'>
                        <div style={{ display: 'flex' }}>
                            <h3>$14.9</h3>
                        </div>
                        <div>
                            <h3>עוגיית סנדוויץ</h3>
                            <h5>תוספות: שוקולד לבן, חמאת בוטנים.</h5>
                            <h5>וכן קינוח פירות  טרופי.</h5>
                        </div>
                    </div>
                </div>
                <hr />

                <div id="ordersProduts">
                    <div id='TotalPrice'>
                        <div style={{ display: 'flex' }}>
                            <h3>$14.9</h3>
                        </div>
                        <div>
                            <h3>עוגיית סנדוויץ</h3>
                            <h5>תוספות: שוקולד לבן, חמאת בוטנים.</h5>
                            <h5>וכן קינוח פירות  טרופי.</h5>
                        </div>
                    </div>
                </div>
                <hr />
                <div id='totalSection'>
                    <div id='totalSection_t'>
                        <h4>סכום משנה</h4>
                        <h4>9.90</h4>
                    </div>
                    <div id='totalSection_t'>
                        <h4>משלוח</h4>
                        <h4>8.50</h4>
                    </div>
                    <div id='totalSection_t'>
                        <h4>סה'כ סופי</h4>
                        <h4>17.40</h4>
                    </div>
                    <button class="add-btn1">Add more items +</button>
                    <button class="checkout-btn">Checkout</button>

                </div>
            </div>
            {/* <div style={{ position: 'absolute', but: 0 }}> */}
                <div id='footer_orders'>
                    <Footer />
                </div>
                {/* <AppRouter/> */}

            </div>

            )
}
