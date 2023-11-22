import React from 'react'
import './commonItemData.css';

const CommonSlidesItem = ({item}) => {
  return (
    <div className='common-item-slide'>
        <div className='common-item-slide-wrapper'>
            <img src={item.slide}
                 className='slide-img'
                 alt={item.id}
              />
        </div>
    </div>
  )
}

export default CommonSlidesItem