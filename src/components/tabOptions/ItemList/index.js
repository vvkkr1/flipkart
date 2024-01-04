import React from 'react'
import './itemList.css'

//Todo 
//! not to do
//? to write question
//* important notes

const ItemList = ({list}) => {
  return (
    <div className='item-list'>
        <div className='item-list-wrap max-width2'>
            <div className='item-list-container'>
                <div className='item-image-container absolute-center' style={{display:"flex",justifyContent:"space-evenly"}}>
                  <a href="www.google.com">
                    <img src={list.img}
                       className='item-img'
                       alt={list.title}
                       style={{height:"64px",width:"64px"}}
                    />
                  </a>
                </div>
                <div className='item-list-title absolute-center'>{list.title}</div>
            </div>
        </div>
    </div>
  )
}

export default ItemList