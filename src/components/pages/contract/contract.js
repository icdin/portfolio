import React, { useState }  from 'react'
//import {useHistory} from 'react-dom'
require('./contract.css')
const Contract = ()=>{
    //const history = useHistory()
    const[title,setTitle] = useState()
    const[subject,setSubject] = useState()
    const[mail,setMail] = useState()
    const[phone,setPhone] = useState()
    const[address,setAddress] = useState()
    // useEffect(()=>{

    // },[])
    const contractHandler= e =>{
        e.preventDefault()
        fetch('/contract',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title,
                subject,
                mail,
                phone,
                address
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
                         //history.push('/contract')
                    }
                }
            )
    }
    return(
        <div className='contaier contract-container'>
<div className='card contract-card'>
    <div className='contract-title'>
        Talk about the contract
    </div>
<form onSubmit={contractHandler}>
<input type='text'  className='contract-input' placeholder='Contract Name' value={title} onChange={e=>setTitle(e.target.value)} />
<textarea type='type'  className='contract-input' placeholder='Describe the contract in detail' value = {subject} onChange={e=>setSubject(e.target.value)} />
<input type='mail'  className='contract-input' placeholder='Mail' value={mail} onChange={e=>setMail(e.target.value)} />
<input type='text'  className='contract-input' placeholder="Company's" value={address} onChange={e=>setAddress(e.target.value)} />
<input type='text'  className='contract-input' placeholder='Phone' value={phone} onChange={e=>setPhone(e.target.value)} />
<button type='submit' className='hire-btn'>Submit</button>
</form>
</div>

        </div>
    )
}
export default Contract