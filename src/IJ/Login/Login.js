import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
import './Login.css'

function Login() {
  const history = useHistory()
  const[firstName,setFirstName] = useState('')
  const[lastName,setLastName] = useState('')
  const[phone,setPhone] = useState('')
  const[email,setEmail] = useState('')
  const[country,setCountry] = useState('')
  const[password,setPassword] = useState('')

  const Postdata =()=>{
      fetch('/register',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,
        firstName,
        lastName,
        country,
        phone,
        password
      })
    }).then(res=>res.json())
    .then(data=>{
        
      if(data.empty){
        return M.toast({html:data.empty,classes:'#ef5350 red lighten-1'})
      }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        return M.toast({html:'Invaid email format'})
      }else if(data.unavailableEmail){
        return M.toast({html:data.unavailableEmail,classes:'#ef5350 red lighten-1'})
      }
      else {
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
       // dispatch({type:"USER",payload:data.user})
        history.push('/signin')
      }
      
    })
  }
  return (
  <div className='login-page'>
      <h4 className='page-title'>Login</h4>
    <div className='login-card'>
      <div className='card login-input-card input-field'>
<input type='text'  className='input' placeholder='Email'  value={email} onChange={e=>setEmail(e.target.value)}/>
<div className='login-eye-group'>
<input type='password'  className='input' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
{<FontAwesomeIcon className='eye' icon='eye' />}
</div>
<button  className="btn btn-primary login-btn" style={{margin:'10px'}} onClick={()=>Postdata()}>Login
  </button>
  <div className='page-links'>
  <h6><em><Link to='/email' className='forgot-password'>Forgot Password? </Link></em></h6>
  <div className='register-link'>
  <h6 ><Link to='/register' className='login-link'>Register</Link></h6>
  </div>
  </div>
        </div>
      </div>
  </div>
  );
}

export default Login;
