import React from 'react'
const TopeCard = (props) => {
    return (

        <div className='bottom' style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
            <div style={{ width: '360px', height: '264px', boxSizing: 'border-box' }}>
                <img src={"https://dnshaked.co.il/assets/IMG_18_resize.jpg"} alt="img" style={{ width: '100%',height:'100%' }} />
            </div>

            <div className='details' style={{ width: '360px', height: '115px' }}>
                <p className='title' style={{ fontWeight: 'bold' }}>Garden Dining Room</p>
                <div className='elements'>4.2  •  32 min • Free delivery</div>
            </div>
            <p style={{fontWeight: 'bold'}}>Most popular</p>

        </div>
    )
}

export default TopeCard;