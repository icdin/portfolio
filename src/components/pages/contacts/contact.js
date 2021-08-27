import React, { useState }  from 'react'
//import {useHistory} from 'react-dom'
require('./contact.css')
const Contact = ()=>{
    //const history = useHistory()
    const[title,setTitle] = useState()
    const[subject,setSubject] = useState()
    const[mail,setMail] = useState()
    const[phone,setPhone] = useState()
    // useEffect(()=>{

    // },[])
    const contactHandler= e =>{
        e.preventDefault()
        fetch('/contact',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title,
                subject,
                mail,
                phone
            })
        }).then(
            res=>res.json())
            .then(
                data=>{
                    if(data){
                         alert('Submission successful!')
                         //history.push('/home')
                    }else{
                         alert({msg:'Sorry'})
                         //history.push('/contact')
                    }
                }
            )
    }
    return(
        <div className='contaier contact-container'>
<div className='card contact-card'>
    <div className='contact-title'>
        We're ready to serve!
    </div>
<form onSubmit={contactHandler}>
<input type='text'  className='contact-input' placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)} />
<textarea type='type'  className='contact-input' placeholder='Message Body' value = {subject} onChange={e=>setSubject(e.target.value)} />
<input type='mail'  className='contact-input' placeholder='Mail' value={mail} onChange={e=>setMail(e.target.value)} />
<input type='text'  className='contact-input' placeholder='Phone' value={phone} onChange={e=>setPhone(e.target.value)} />
<button type='submit' className='hire-btn'>Submit</button>
</form>
</div>

        </div>
    )
}
export default Contact