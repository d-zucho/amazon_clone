import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Product from '../../components/Product/Product'
import db from '../../firebase/firebase.config.js'

import './homePage.styles.scss'

function HomePage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    db.collection('products').onSnapshot((snapshot) => {
      let tempProducts = []
      snapshot.docs.map((doc) => {
        tempProducts.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setProducts(tempProducts)
    })
  }, [])

  return (
    <div>
      <Header />
      <div className="Home">
        <div className="Home-container">
          <div className="Home-banner"></div>
          <div className="Home-content">
            <div className="Home-products">
              {products.slice(0, 2).map((product) => (
                <Product {...product} />
              ))}
            </div>
            <div className="Home-products">
              {products.slice(2).map((product) => (
                <Product {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
