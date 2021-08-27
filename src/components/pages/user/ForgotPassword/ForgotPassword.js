import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
import './Login.css'

function ResetPassword() {
  const history = useHistory()
  const[email,setEmail] = useState('')
  const[newPassword,setNewPassword] = useState('')

  const Postdata =()=>{
      fetch('/reset-password',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,
        newPassword
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
        history.push('/login')
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
<input type='password'  className='input' placeholder='New Password' value={newPassword} onChange={e=>setNewPassword(e.target.value)}/>
{<FontAwesomeIcon className='eye' icon='eye' />}
</div>
<div className='login-eye-group'>
<input type='password'  className='input' placeholder='Confirm New Password' value={newPassword} onChange={e=>setNewPassword(e.target.value)}/>
{<FontAwesomeIcon className='eye' icon='eye' />}
</div>
<button  className="login-btn" onClick={()=>Postdata()}>Confirm
  </button>
  <div className='page-links'>
  <div className='register-link'>
  <h6 ><Link to='/register' className='login-link'>Register</Link></h6>
  </div>
  </div>
        </div>
      </div>
  </div>
  );
}

export default ResetPassword;
