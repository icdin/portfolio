import React, { useState,useRef } from 'react';
import {Link,useHistory} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import M from 'materialize-css'
import './Register.css'

function Register() {
  const history = useHistory()
  const[firstName,setFirstName] = useState('')
  const[lastName,setLastName] = useState('')
  const[phone,setPhone] = useState('')
  const[email,setEmail] = useState('')
  const[country,setCountry] = useState('')
  const[password,setPassword] = useState('')
  const[show,setShow] = useState(false)
  const[target,setTarget] = useState(null)

const  showPassword =(event)=>{
  setShow(!show)
  setTarget(event.target)
}
const eyeRef= useRef(null)

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
    <div className='register-page'>
      <h4 className='page-title'>Sign Up</h4>
    <div className='login-card'>
    <div className='card login-input-card input-field'>

<input type='text'  className='input' placeholder='First Name'  value={firstName} onChange={e=>setFirstName(e.target.value)}/>
<input type='text'  className='input' placeholder='Last Name'  value={lastName} onChange={e=>setLastName(e.target.value)}/>
<input type='text'  className='input' placeholder='Email'  value={email} onChange={e=>setEmail(e.target.value)}/>
<select  className='input'>
  <option>Country</option>
  <option>Australia</option>
  <option>Canada</option>
  <option>India</option>
  <option>Nigeria</option>
  
</select>
<input type='text'  className='input' placeholder='Phone Number'  value={phone} onChange={e=>setPhone(e.target.value)}/>
<span className='eye-group' ref={eyeRef}>
  <input type='text'  className='input' show={show} target={target} placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
  {show? <FontAwesomeIcon icon='eye-slash' />:<FontAwesomeIcon className='eye' icon='eye' />}
</span>
<span className='eye-group' ref={eyeRef}>
  <input type='text'  className='input' show={show} target={target} placeholder='Confirm Password' value={password} onChange={e=>setPassword(e.target.value)}/>
  {show? <FontAwesomeIcon icon='eye-slash' />:<FontAwesomeIcon className='eye' icon='eye' />}
</span>

<div className='btn-terms'>
<input type='radio' className='radio-btn' />
<h6 className='accept-terms'>I confirm that I'm 18 years old or older and accept</h6>
</div>

<div className='conditions'>

<h5 className='accept-policy'>Terms & Conditions, Privacy Policy </h5><em style={{fontSize:'18px'}}>and</em>
<h5 className='accept-policy'>Order Execution Policy</h5>
</div>
<button  className="btn btn-primary register-btn" style={{margin:'10px'}} onClick={()=>Postdata()}>Let's Go!
  </button>
  <div className='page-links'>
  <h6  className='register-link'><Link  className='register-link' to='/login'>Login</Link> </h6>
  </div>
        </div>
      </div>
   </div>
  );
}

export default Register;
