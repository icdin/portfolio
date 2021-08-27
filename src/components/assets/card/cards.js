import React from 'react'
import amtech from '../../assets/thumbnails/amtech.PNG'
import rereandco from '../../assets/thumbnails/rereandco.PNG'
import megatorch from '../../assets/thumbnails/megatorch.PNG'
import drillfit from '../../assets/thumbnails/drillfit.jpg'
import agromachineries from '../../assets/thumbnails/agromachineries.jpg'
import chilearts from '../../assets/thumbnails/chilearts.jpg'
import mmb from '../../assets/thumbnails/mmb.PNG'
import vitavite from '../../assets/thumbnails/vitavite.PNG'
import Card from './card'
require('./cards.css')

const Cards = (req,res)=>{
    const items = [{'id':'001','name':'Amtech Agro Turnkey','thumbnail':amtech,'description':'Business Website','link':'http://www.amtechagro.com/'},
    {'id':'002','name':'RERANDCO Breafast & Brunch','thumbnail':rereandco,'description':'Food Delivery/Ecommerce','link':'http://softgloby.com/'},
    {'id':'003','name':'Mega Torch Projects','thumbnail':megatorch,'description':'Business Website','link':'http://megatorchprojects.com/'},
    {'id':'004','name':'Agro Machineries','thumbnail':agromachineries,'description':'Business Website','link':'http://agromachineries.net/'},
    {'id':'005','name':'Chile Arts Ltd.','thumbnail':chilearts,'description':'E-Commerce Website','link':'http://www.chilearts.com'},
    {'id':'006','name':'Drill Fitt Oil and Gas','thumbnail':drillfit,'description':'Business Website','link':'http://www.doilandgas.com'},
    {'id':'007','name':'My Medicines Box','thumbnail':mmb,'description':'Parmaceutical Vendor/E-Commerce Website','link':'http://www.mymedicinesbox.com'},
    {'id':'008','name':'My Medicines Box','thumbnail':mmb,'description':'Parmaceutical Vendor/E-Commerce Mobile App','link':'http://www.mymedicinesbox.com'},
    {'id':'009','name':'Vitavite Nutrition','thumbnail':vitavite,'description':'Business Website','link':'http://www.vitavite.net'}
    ]
        return(
            <div className='container-fluid'>
                <h3 className='projects-title'>Completed Projects</h3>
<div className="container">
            <div className="row">
            {items ? ( items.map(item=>{
             
             return(
                 <li key={item.id} className='cards-list'>
         <div className="md-col-4"><Card item={item}
         />
         
         </div>
         </li>
             )
         })
     ) : <h4>Not found</h4>
         
         }
         </div>
            </div>
            </div>
        )
    }
export default Cards












// import React from'react'
// import Card from './card'
// require('./cards.css')

// const Cards = ()=>{
//     return(
// <div className='card-container'>
// <div className='cards-item'>
// <li><Card /></li>
// <li><Card /></li>
// <li><Card /></li>
// </div>
// </div>
//     )
// }
// export default Cards