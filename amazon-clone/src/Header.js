import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
function Header() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to="/">
        <img 
         className='header_logo'
          src='/images/alogo.png'alt=''/>
      </Link>
    
           <div className='header_search'>
                <input
                className='header_searchInput'
                 type="text"/>
                 <SearchIcon 
                 className='header_searchIcon'/>
              
            </div>

          <div className='header_nav'>
            <div className='header_option'>
               <span 
               className='header_optionlineone'>Hello Guest</span>
               <span 
               className='header_optionlinetwo'>Sign In</span>
          </div>
          <div className='header_option'>
          <span 
               className='header_optionlineone'>Returns</span>
               <span 
               className='header_optionlinetwo'>Orders</span>
             
          </div>
          <div className='header_option'>
          <span 
               className='header_optionlineone'>Your</span>
               <span 
               className='header_optionlinetwo'>Prime</span>
           </div>
           <Link to="/checkout">
            <div className='header_optionBasket'>
              <ShoppingBasketIcon/>
              <span className='header_optiontwo header_basketCount'>{basket?.length}</span>
            </div>
            </Link>
          </div>
    </div>
  )
}

export default Header