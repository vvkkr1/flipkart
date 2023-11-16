import React from 'react'
import './header.css'
import flipkart from '../../../svg/flipkart-search-icon.svg'

const Header = () => {
  return (
    <div className='header'>
      
      <div className='header-container max-width'>

  {/* icon          */}
          <div className='logo-title-container'>
              <div className='logo-container'>
                 <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg'
                   className='logo-image'
                   alt='flipkart logo'
                   />
              </div>
              
              <div style={{marginLeft:"40px"}} className='title-container'>
                      <span style={{color:"#9e9e9e",marginRight:"4px"}} className='logo-title'>Explore</span> 
                      <span style={{color:"#ffc200"}} className='logo-subtitle'> Plus </span>
                      <img style={{marginLeft:"6px"}} src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg'
                           className='logo-title-small-icon'
                           alt='small logo'
                        />
              </div>
          </div>

          <div className='header-right'>

 {/* search               */}
              <div className='product-search'>
                  <img src={flipkart} alt='logo' className='search-icon'/>
                    <input placeholder='Search for Products, Brands More' 
                            className='product-search-input'
                            />
              </div>

{/* user  */}
              <div className='user'>
                  <div>Become a Seller</div>
                  <div>Sign in</div>
                  <div>Cart</div>
              </div>


          </div>
      </div>

    </div>
  )
}

export default Header