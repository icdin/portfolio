import React from 'react'
import Card from '../../assets/card/card'
import amtech from '../../assets/thumbnails/amtech.PNG'
import rereandco from '../../assets/thumbnails/rereandco.jpg'
import megatorch from '../../assets/thumbnails/megatorch.jpg'
//require('./projects.css')
const Projects = ()=>{
    const items = [{'id':'001','name':'Amtech Agro Turnkey','thumbnail':amtech,'description':'Business Website','link':'http://www.amtechagro.com/'},
    {'id':'002','name':'RERANDCO Breafast & Brunch','thumbnail':rereandco,'description':'Food Delivery/Ecommerce','link':'http://softgloby.com/'},
    {'id':'002','name':'Mega Torch Projects','thumbnail':megatorch,'description':'Business Website','link':'https://megatorchprojects.com/'},
    {'id':'003','name':'Agro Machineries','thumbnail':img3,'description':'Agro Machineries','link':'http://agromachineries.net/'},
    {'id':'001','name':'Amtech Agro Turnkey','thumbnail':img1,'description':'Chile Arts Ltd.','link':'http://www.chilearts.com'},
    {'id':'002','name':'Drill Fitt Oil and Gas','thumbnail':img2,'description':'Drill Fitt','link':'http://www.doilandgas.com'},
    
    {'id':'001','name':'Amtech Agro Turnkey','thumbnail':img1,'description':'Amtech Agro Turnkey','link':'http://www.amtechagro.com'},
    {'id':'002','name':'Drill Fitt Oil and Gas','thumbnail':img2,'description':'Drill Fitt','link':'http://www.doilandgas.com'},
    {'id':'003','name':'Agro Machineries','thumbnail':img3,'description':'Agro Machineries','link':'http://www.agromachineries.net'}
    ]
    // const items = [{'name':'Brave','description':'My favorite','id':'001','thumbnail':'One'},{'name':'Manny','description':'My Friend','id':'002','thumbnail':'Two'}]
    return(
<div className='container'>
    <h3 className='projects-title'>Some of the projects completed by me</h3>
<div className='items'>
{
    items? items.map(item=>
        {
            const name = item.name
            const description = item.description
            const thumbnail = item.thumbnail
            const link = item.link
            return   (

                <div className='container-fluid d-flex justify-content-center'>
                <li key={item.id}  className='card-item'>
                           <div className='md-col-4'>
                               <Card name={name} description={description} thumbnail={thumbnail} link={link} />
                           </div>
                        </li>
                            </div>
                
            )
        }
     ) :''
}
</div>
</div>
    )
}
export default Projects
