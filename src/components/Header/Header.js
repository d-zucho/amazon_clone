import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <div className="Header-logo">
          <img
            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
            alt="Logo"
          />
        </div>
      </Link>

      {/* Address */}
      <div className="Header-optionAddress">
        {/* Icon */}
        <div className="Header-option">
          <span className="Header-optionLineOne">Hello,</span>
          <span className="Header-optionLineTwo lineTwo">
            Select your address
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="Header-search">
        <input type="text" className="Header-searchInput" />
        <div className="Header-searchIcon-Container">
          <SearchIcon className="searchIcon" />
        </div>
      </div>

      <div className="Header-navItems">
        {/* Login */}
        <div className="Header-NavOption">
          <span className="Header-optionLineOne">Hello, Danny</span>
          <span className="Header-optionLineTwo lineTwo">Account & Lists</span>
        </div>
        <div className="Header-NavOption">
          <span className="Header-optionLineOne">Returns</span>
          <span className="Header-optionLineTwo lineTwo">& Orders</span>
        </div>

        <Link to="/cart">
          <div className="Header-NavOption cart">
            <ShoppingBasketIcon />
            <span className="Header-cartCount">20</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
