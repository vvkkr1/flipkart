import React from 'react'
import './homepage.css'
import Header from '../components/common/header'
import TabOptions from '../components/tabOptions'
// import CommonItems from '../components/common/commonSlides'

const Homepage = () => {
  return (
    <div className='homepage'>
        <Header />
        <TabOptions/>
        {/* <CommonItems/> */}
    </div>
  )
}

export default Homepage