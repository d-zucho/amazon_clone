import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Product from '../../components/Product/Product'
import db from '../../firebase/firebase.config.js'

import './homePage.styles.scss'

function HomePage() {
  let product = {}

  const getProducts = () =>
    db.collection('products').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => console.log(doc.data()))
    })

  useEffect(() => {
    getProducts()
  }, [])

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
