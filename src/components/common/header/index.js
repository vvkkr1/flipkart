import React from 'react'
import './header.css'
import flipkart from '../../../svg/flipkart-search-icon.svg'

const Header = () => {
  return (
    <div className='header'> 
      <div className='header-container max-width'>

        <div className='header-left'>
          {/* icon */}
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

          {/* search */}
          <div className='product-search-wrap'>
              
              <div className='product-search'>
                <div className='search-icon-container'>
                  <img src={flipkart} 
                       alt='logo' 
                       className='search-icon'
                    />
                </div>
                
                <div className='product-search-input-container'>
                  <input placeholder='Search for Products, Brands More' 
                       className='product-search-input'
                    />
                </div>    
              </div>

          </div>
        </div>

        {/* user header-right*/}
        <div className='user-details'>   
            <div className='user-sign-in'>
                <div className="user-logo-container">
                      <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg' 
                           alt='user-logo' 
                           className='user-logo absolute-center'
                           style={{marginRight:"8px"}}
                      /> 
                </div>
                      
                <div className='user-log-in-title'>
                  <div style={{textDecoration:"none",fontSize:"16px",lineHeight:"24px"}} href="index.html" className='title'>Login</div>
                </div>
                    
                {/* <div className='user-caret-container'> */}
                          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" 
                               alt = "caret"
                               className = 'caret-icon absolute-center'
                               style = {{marginLeft:"8px",height:"12px",width:"12px"}} 
                          />
                {/* </div> */}
            </div>  

            <div className='cart-user'>
                      <div className='cart-logo-container'>
                        <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg'
                             className='cart-logo absolute-center'
                             alt='cart'
                             style={{marginRight:"8px"}}
                           />
                      </div>
                    
                      <div className='cart-title'>
                         <a style={{textDecoration:"none",color:"#000",fontSize:"16px",lineHeight:"24px"}} href="index.html">Cart</a>
                      </div>
            </div>
             
            <div className='user-seller'>
                      <div className='seller-logo-container'>
                      <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg'
                         alt='user-seller'
                         className='seller-logo absolute-center'
                         style={{marginRight:"8px"}}
                        />
                      </div>
                    
                      <div className='seller-title'>
                       <a style={{textDecoration:"none",color:"#000",fontSize:"16px",lineHeight:"24px"}} href="index.html">Become a Seller</a>
                      </div>  
            </div>
                  
            <div className='dropdown-container'>
                    <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg'
                         className='dropdown'
                         alt='dropdown'
                         style={{width:"24px",height:"24px"}}
                         />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Header