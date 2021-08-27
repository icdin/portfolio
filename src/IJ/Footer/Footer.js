import React, { useEffect, useState } from'react'

require('./Footer.css')

const Footer = ()=>{
    
    return(
        <div className='card footer'>
            <div className='widgets'>
                <div className='card footer-one'>
   <h6>Footer One</h6>
</div>
            
<div className='card footer-two'>
   <h6>Footer Two</h6>
</div>
<div className='card footer-three'>
   <h6>Footer Three</h6>
</div>
         
            </div>
        </div>
    )
}
export default Footer