import React from 'react'
import Header from '../../components/Header/Header'
import Product from '../../components/Product/Product'

import './homePage.styles.scss'

function HomePage() {
  return (
    <div>
      <Header />
      <div className="Home">
        <div className="Home-container">
          <div className="Home-banner"></div>
          <div className="Home-content">
            <div className="Home-products">
              <Product />
              <Product />
            </div>
            <div className="Home-products">
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
