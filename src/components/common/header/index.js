import React from 'react'
import './header.css'
import flipkart from '../../../svg/flipkart-search-icon.svg'

const Header = () => {
  return (
    <div className='header'>
      
     <div className='header-container max-width'>

        <div className='header-left'>
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
  {/* search        */}
          <div className='product-search'>
                <img src={flipkart} 
                     alt='logo' 
                     className='search-icon'
                  />
                <input placeholder='Search for Products, Brands More' 
                       className='product-search-input'
                  />
          </div>

        </div>

  {/* user          */}
        <div className='user-details'>
                  
                  <div className='user-seller'>
                    <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg'
                         alt='user-seller'
                         className='seller-logo'
                        />
                    <li>
                      <a style={{textDecoration:"none",color:"#000",fontSize:"16px",lineHeight:"24px"}} href="index.html">Become a Seller</a>
                    </li>
                  </div>
                  
                  <div className='user-sign-in'>
                    <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-815786.svg' 
                         alt='user-logo' 
                         className='user-logo'
                        />
                    <li>
                      <a style={{textDecoration:"none",color:"#000",fontSize:"16px",lineHeight:"24px"}} href="index.html">Sign in</a>
                    </li>
                  </div>

                  <div className='cart-user'>
                    <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg'
                         className='cart-logo'
                         alt='cart'
                         />
                    <li>
                      <a style={{textDecoration:"none",color:"#000",fontSize:"16px",lineHeight:"24px"}} href="index.html">Cart</a>
                    </li>
                  </div>

                  <div className='dropdown-container'>
                    <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg'
                         className='dropdown'
                         alt='dropdown'
                         />
                  </div>

        </div>

      </div>

    </div>
  )
}

export default Header