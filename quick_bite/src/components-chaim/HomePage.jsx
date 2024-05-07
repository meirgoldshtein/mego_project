import React from 'react'
// import Elipse from 'C:\Users\LIFE2\Desktop\mego\project mego\mego_project\quick_bite\src\components-chaim\pic\Ellipse 21.jpg'
// import picture from "mego_proje  ct\\quick_bite\src\\components-chaim\\pic\\pic_eate.png"
import picture from "./pic/pic_eate.png"
import picture1 from "./pic/pic_eate_2.jpg"
import picture2 from "./pic/Frame 1287.png"
import mapIcon from "./pic/map-pin.png"
import shopingBasket from "./pic/shopping-basket.png"
import UncontrolledExample from './carousel.jsx'
import Footer from './Footer.jsx'
import data from './test.json'


export default function HomePage() {
    return (
        <>
                <div className="container">
                    <div id="sistem_bar">
                        {/* <img src="C:\Users\LIFE2\Desktop\mego\project mego\mego_project\quick_bite\src\components-chaim\pic\Ellipse 21.jpg" alt="" /> */}
                        {/* <img src={Elipse} alt="" /> */}
                        <p>•</p>
                    </div>
                    <div id="app_bar">
                        <div id="row_top">
                            <ul>
                                <li> <img src={mapIcon} id='row_right'/* style={{backgroundColor:'green'}} */ alt="" /></li>
                                <li>Bet shemesh</li>
                                <li> <img src={shopingBasket} id='row_right'/* style={{backgroundColor:'green'}} */ alt="" /></li>
                            </ul>
                            {/* <img src={mapIcon} id='row_right' alt="" />
                    <h4 style={{backgroundColor:'blue'}}>Bet shemesh</h4>
                    <img src={shopingBasket} id='row_left'alt="" /> */}
                        </div>
                    </div>
                    <div id='Offer_card'>
                        <h3>מבצע לכבוד ספירת העומר</h3>
                        <h3>15% הנחה למזדרזים להזמין!!</h3>
                        <button id='BtnDiscount'>להזמנה עכשיו</button>
                    </div>
                    <h2>מסעדות מומלצות</h2>
                    {/* <div id="carousel">
                <img src={picture} alt="" />
                <img src={picture} alt="" />
                <img src={picture} alt="" />
              
            </div> */}
                    <div>
                        {/* <UncontrolledExample/> */}

                    </div>
                    <div id='row_pic'>
                        <div id='row_pic-33'>
                            <img src={picture} id='row_pic1' alt="" />
                            <h3>67 Athi hotel</h3>
                            <h4>summer house, athi river</h4>
                            <h4>Free delivery • 32 mins</h4>
                        </div>
                        <div id='row_pic-33'>
                            <img src={picture} id='row_pic2' alt="" />
                            <h3>67 Athi hotel</h3>
                            <h4>summer house, athi river</h4>
                            <h4>Free delivery • 32 mins</h4>
                        </div>
                        <div id='row_pic-33'>
                            <img src={picture} id='row_pic3' alt="" />
                            <h3>67 Athi hotel</h3>
                            <h4>summer house, athi river</h4>
                            <h4>Free delivery • 32 mins</h4>
                        </div>
                    </div>
                    <h2>קטגוריות</h2>
                    <div id='catagories'>
                        <div id='catagoti-30'>
                            <img src={picture1} alt="" />
                            <p>Pizza</p>
                        </div>
                        <div id='catagoti-30'>
                            <img src={picture1} alt="" />
                            <p>Burgers</p>
                        </div>
                        <div id='catagoti-30'>
                            <img src={picture1} alt="" />
                            <p>Greens</p>
                        </div>
                    </div>
                    <h2>מלונות פופולריים</h2>
                    <div id='pic-100'>
                        <img src={picture2} alt="" />
                        <h3>67 Athi hotel</h3>
                        <h4>summer house, athi river</h4>
                        <h4>Free delivery • 32 mins</h4>
                    </div>
                    <div id='pic-100'>
                        <img src={picture2} alt="" />
                        <h3>67 Athi hotel</h3>
                        <h4>summer house, athi river</h4>
                        <h4>Free delivery • 32 mins</h4>
                    </div>
                    <div id='pic-100'>
                        <img src={picture2} alt="" />
                        <h3>67 Athi hotel</h3>
                        <h4>summer house, athi river</h4>
                        <h4>Free delivery • 32 mins</h4>
                    </div>

                </div>
                <Footer />
        
        </>



        // <div id='sistem_bar'></div>

    )
}
