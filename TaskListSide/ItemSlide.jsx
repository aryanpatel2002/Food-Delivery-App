import React from 'react'
import './SideBar.css'
function Item(props)
{
    const {img,name,quant,specify,price}=props.item
    return (
        <div className='ItemContainer'>
            <img src={img}/>
            <p>{name}</p>
            <p>{quant}</p>
            <p>{specify}</p>
            <p>{price}</p>
        </div>
    )
}
export default Item