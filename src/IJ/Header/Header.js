import React, { useEffect, useState } from'react'

require('./Header.css')

const Header = ()=>{
    const[register,setRegister] = useState(true)
    const[login,setLogin] = useState(false)
// useEffect(()=>{
//     setRegister(register)
//     setLogin(login)
// },[])

 const handleRegister = (e)=>{
     setRegister(false)
     setLogin(true)
 }
 const handleLogin = (e)=>{
     setRegister(true)
     setLogin(false)
 }
//     const logger = ()=>{
//         if(login==false){
//             return(
//                 <li>
//     <a className='register' onClick={handleRegister} href='/register'>Register</a>
// </li>
//             )
//         }else{
//             return (
// <li>
//     <a className='login' onClick={handleLogin}  href='/login'>Login</a>
// </li>
//             )
//         }
//     }
    return(
        <div className='card header'>
            <div className='navbar'>
     {register?            
     <li className='navlinks'>
     <a className='login' onClick={handleLogin}  href='/register'>Login</a>
 </li>
   :  <li className='navlinks'>
   <a className='register' onClick={handleRegister} href='/login'>Register</a>
</li>
            
}

         
            </div>
        </div>
    )
}
export default Header