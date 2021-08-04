import React from 'react'
import './product.styles.scss'

function Product(props) {
  return (
    <div className="Product-container">
      <div className="Product-description">
        <span className="Product-title">{props.title}</span>
        <span className="Product-price">${props.price}</span>
        <span className="Product-rating">{'⭐' * props.rating}</span>

        <img src={props.image} alt="3700x" />
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
