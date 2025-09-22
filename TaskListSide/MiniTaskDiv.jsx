import React from 'react'
import './SideBar.css'
function MiniTask(props)
{
    const {name,time,price}=props.user
    return(
        <div className='Handling-Button'>
            <button className='MiniTask-Container1'>
                <div>
                    <p><span>{name}</span></p>
                    <p><span>{time}</span></p>
                </div>
                <div>
                    <p>{price}</p>
                </div>
            </button>
        </div>
    )
}
export default MiniTask