import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
require('./home.css')
const Home = ()=>{
    return(
        <div className='home'>
                <div className='content'>
<h4>icdin Freelancing</h4>
<p>
    My name is Brave Normakoh, I live in Port Harcourt Nigeria.
    I'm a website/mobile app developer and instructor.
</p>
                </div>
                <div className='links'>
                <a href='/contract' className='link-one'><FontAwesomeIcon  className='link-one-icon' icon='accessible-icon' /> I need a website</a>
<a href='/hire' className='link-two'>I Heed Hire</a>
                </div>
            
        </div>
    )
}
export default Home