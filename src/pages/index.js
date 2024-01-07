import React from 'react'
import './homepage.css'
import Header from '../components/common/header'
import TabOptions from '../components/tabOptions'
import Banner from '../components/banners'
// import CommonItems from '../components/common/commonSlides'

const Homepage = () => {
  return (
    <div className='homepage'>
        <Header />
        <TabOptions/>
        <Banner/>
        {/* <CommonItems/> */}
    </div>
  )
}

export default Homepage