import React from 'react'

import home from './pic/home_FILL0_wght400_GRAD0_opsz24.png'
import search from './pic/search_FILL0_wght400_GRAD0_opsz24.png'
import orders from './pic/grading_FILL0_wght400_GRAD0_opsz24.png'
import account from './pic/person_FILL0_wght400_GRAD0_opsz24.png'
import './footer.css'

export default function Footer() {
  return (
    <div style={{position:'absolute', /* ,bottom:-1300 */}}>
        <ul id='ulFooter' style={{display:'flex', direction:'ltr',justifyContent:'space-between', textAlign:'center', width:'300px'}} >
            <li id='liHover'><li><img src={home} alt="" /></li><li>Home</li></li>
            <li id='liHover'><li><img src={search} alt="" /></li><li>Search</li></li>
            <li id='liHover'><li><img src={orders} alt="" /></li><li>Orders</li></li>
            <li id='liHover'><li><img src={account} alt="" /></li><li>Account</li></li>
        </ul>
    </div>
  )
}
