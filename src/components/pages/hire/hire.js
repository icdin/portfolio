import React, { useState }  from 'react'
//import {useHistory} from 'react-dom'
require('./hire.css')
const Hire = ()=>{
    const[title,setTitle] = useState()
    const[description,setDescription] = useState()
    const[mail,setMail] = useState()
    const[company,setCompany] = useState()
    const[address,setAddress] = useState()
    const[phone,setPhone] = useState()
    const hireHandler= e =>{
        e.preventDefault()
        fetch('/hire',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title,
                description,
                mail,
                phone,
                company,
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
                         //history.push('/hire')
                    }
                }
            )
    }
    return(
        <div className='contaier hire-container'>
<div className='card hire-card'>
    <div className='hire-title'>
        Request for hire!
    </div>
    <form onSubmit={hireHandler}>
<input type='text'  className='contact-input' placeholder='Hire type' value={title} onChange={e=>setTitle(e.target.value)} />
<input type='text'  className='contact-input' placeholder='Company Name' value={company} onChange={e=>setCompany(e.target.value)} />
<textarea type='type'  className='contact-input' cols='50' placeholder='Describe your needs in detail' value = {description} onChange={e=>setDescription(e.target.value)} />
<input type='mail'  className='contact-input' placeholder='Mail' value={mail} onChange={e=>setMail(e.target.value)} />
<input type='text'  className='contact-input' placeholder='Phone' value={phone} onChange={e=>setPhone(e.target.value)} />
<textarea type='type'  className='contact-input' cols='50' placeholder='Your address' value = {address} onChange={e=>setAddress(e.target.value)} />
<button type='submit' className='hire-btn'>Submit</button>
</form>
</div>

        </div>
    )
}
export default Hire






// import React, {useState} from 'react'
// require('./hire.css')
// const Hire = ()=>{
//     const[title,setTitle] = useState()
//     const[description,setDescription] = useState()
//     const[mail,setMail] = useState()
//     const[company,setCompany] = useState()
//     const[address,setAddress] = useState()
//     const[phone,setPhone] = useState()
//     // useEffect(()=>{

//     // },[])
//     const contactHandler= e =>{
//         e.preventDefault()
//         fetch('/contact',{
//             method:'post',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 title,
//                 description,
//                 mail,
//                 phone,
//                 company,
//                 address
//             })
//         }).then(
//             res=>res.json())
//             .then(
//                 data=>{
//                     if(data){
//                          alert('Submission successful!')
//                          //history.push('/home')
//                     }else{
//                          alert({msg:'Sorry'})
//                          //history.push('/contact')
//                     }
//                 }
//             )
//     }
//     return(
//         <div className='container hire-container'>
// <div className='card'>
// <div className='contact-title'>
//         Hire us today for your needs!
//     </div>
// <form onSubmit={contactHandler}>
// <input type='text'  className='contact-input' placeholder='Hire type' value={title} onChange={e=>setTitle(e.target.value)} />
// <input type='text'  className='contact-input' placeholder='Company Name' value={company} onChange={e=>setCompany(e.target.value)} />
// <textarea type='type'  className='contact-input' cols='50' placeholder='Describe your needs in detail' value = {description} onChange={e=>setDescription(e.target.value)} />
// <input type='mail'  className='contact-input' placeholder='Mail' value={mail} onChange={e=>setMail(e.target.value)} />
// <input type='text'  className='contact-input' placeholder='Phone' value={phone} onChange={e=>setPhone(e.target.value)} />
// <textarea type='type'  className='contact-input' cols='50' placeholder='Your address' value = {address} onChange={e=>setAddress(e.target.value)} />
// </form>
// </div>
//         </div>
//     )
// }
// export default Hire