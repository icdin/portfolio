import React from 'react'
import logo from '../../assets/thumbnails/logo.PNG'
require('./header.css')
const Header = ()=>{
    const logger = ()=>{
        const userState = localStorage.getItem('user')
            return !userState?
                 <div>
                     <a className='navlink-three' href='/register'>Start Learning</a>
                     </div>:
                    <a className='navlink-three' href='/profile'>Profile</a>
    }
    return(
        <div className='header'>
           <div className='brand-logo'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div>
                <div className='brand-name'>Brave Normakoh<br /><em>Website & Mobile App developer</em></div>
                
            </div>
             <div className='navbar'>
                <a className='navlink-one' href='/'>Home</a>
                <a className='navlink-two' href='/contact'>Contact</a>
                <a className='navlink-three' href='/projects'>Projects</a>
                {logger()}
            </div>
        </div>
    )
}
export default Header