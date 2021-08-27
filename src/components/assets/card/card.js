import React from'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

require('./card.css')

const Card = (props)=>{
    return(
<div className='card card-item'>
<div>
                                <img src={props.item.thumbnail} className='thumbnail' alt='Project Thumbnail'/>
                            </div>
                            <div className='detail'>
                            <div className='name'>{props.item.name}</div>
                            <div className='description'>{props.item.description}</div>
                            <div className='link'>
                                <a href={props.item.link}><FontAwesomeIcon  className='link-icon' icon='link' /> {props.item.link}</a>
                            </div>
                            </div>
</div>
    )
}
export default Card