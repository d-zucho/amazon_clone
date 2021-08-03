import React, { useEffect } from 'react'
import './product.styles.scss'

function Product() {
  return (
    <div className="Product-container">
      <div className="Product-description">
        <span className="Product-title">Ryzen 7 - 3700x</span>
        <span className="Product-price">$1499</span>
        <span className="Product-rating">⭐ ⭐ ⭐ ⭐</span>

        <img
          src="https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_UY218_.jpg"
          alt="3700x"
        />
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
