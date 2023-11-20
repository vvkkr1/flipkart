import React from 'react'
import './itemList.css'

const ItemList = ({list}) => {
  return (
    <div className='item-list'>
        <div className='item-list-wrap max-width2'>
            <div className='item-list-container'>
                <div className='item-image-container absolute-center' style={{display:"flex",justifyContent:"space-evenly"}}>
                  <img src={list.img}
                       className='item-img'
                       alt={list.title}
                       style={{height:"64px",width:"64px"}}
                     />
                </div>
                <div className='item-list-title absolute-center'>{list.title}</div>
            </div>
        </div>
    </div>
  )
}

export default ItemList