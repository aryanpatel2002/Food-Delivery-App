import React from 'react'
import './SideBar.css'
import MiniTask from './MiniTaskDiv';
import Item from './ItemSlide';
function SideBar()
{
    const user1={name:"Task #00350",time:"🕒As Soon as",price:"₵120.21"};
    const user2={name:"Task #00351",time:"🕒As Fast as",price:"₵99.60"};
    const user3={name:"Task #00352",time:"🕒Today 10:45",price:"₵79.50"};
    const user4={name:"Task #00342",time:"🕒Today 12:00",price:"₵90.75"};
    //Items
    const item1={img:"../pasta.jpeg",name:"pasta",quantity:"×3",specify:"double paramesian",price:"₵90.75"}
    const item2={img:"../pizza.jpg",name:"Pizza",quantity:"×2",specify:"WithOut Syrup",price:"₵14.07"}
    const item3={img:"../spring-salad.jpeg",name:"Spring-Salad",quantity:"×5",specify:"with terriyaki sauce",price:"₵50.00"}
    const item4={img:"../vegtable-rice.jpeg",name:"Vegetable Rice",quantity:"×4",specify:"",price:"₵16.75"}
    return(
        <div>
            <div className='SideBar-Container'>
                <div className='SideBar'>
                    <div className='Heading'>
                        <p style={{textAlign:"left"}}>Task list</p>
                        <button
                        style={{justifyContent:"right",height:"40px",width:"80px"}} 
                        >open</button>
                    </div>
                    <div className='Three-Button-Container'>
                        <p><button>New</button></p>
                        <p><button>Preparing</button></p>
                        <p><button>Delivery</button></p>
                    </div>
                    <MiniTask user={user1}/>
                    <MiniTask user={user2}/>
                    <MiniTask user={user3}/>
                    <MiniTask user={user4}/>
                </div>
                <div className='MainContainer'>
                    <div className='sub-Container'>
                        <div>
                            <p style={{fontSize:"25px",fontWeight:"bolder"}}>New</p>
                            <p>Order execution Starts Avutomatically</p>
                        </div>
                        <div >
                            <p></p>
                            <p>Manager:Anjana</p>
                        </div>
                    </div>
                    <div className='sub-Container2'>
                        <h2 style={{textAlign:"left"}}>Task info</h2>
                        <div className='sub-Container2-Card'>
                            <div>
                                <p>Preparing time</p>
                                <p style={{fontWeight:"bolder",fontSize:"20px"}}>00h: 25m :30s</p>
                            </div>
                            <div>
                                <p>Address</p>
                                <p style={{fontWeight:"bolder",fontSize:"20px"}}>Lincoln Street 45</p>
                            </div>
                            <div className='image-container'>
                                <div>
                                    <p>Austin Paul</p>
                                    <p style={{fontWeight:"bolder",fontSize:"20px"}}>+424 56778912</p>
                                </div>
                                <div>
                                    <img src='../whatsapp.png' style={{height:"80px",width:"80px",marginTop:"8px",paddingLeft:"12px"}}/>
                                </div>
                            </div>
                        </div>
                        <Item item={item1}/>
                        <Item item={item2}/>
                        <Item item={item3}/>
                        <Item item={item4}/>
                        <div className='price'>
                            <p>₵90.00</p>
                        </div>
                        <div className='button-container'>
                            <button>Accept Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideBar