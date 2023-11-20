import React from 'react'
import './homepage.css'
import Header from '../components/common/header'
import TabOptions from '../components/tabOptions'

const Homepage = () => {
  return (
    <div className='homepage'>
        <Header />
        <TabOptions/>
    </div>
  )
}

export default Homepage