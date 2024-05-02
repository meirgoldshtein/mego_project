import React from 'react'
import './TopCard.css'
const TopeCard = (img, name, rating, distant, shipping) => {
  return (
    
        <div className='bottom'>
            <img src={img} alt="img" />
 
        <div className='details'>
            <p className='title'>Garden Dining Room</p>
            <div className='elements'></div>

        </div>
    </div>
  )
}

export default TopeCard;