import React from 'react';

const Product = ({ data, brand, add }) => {

  const product = data.filter(prod => {
    return prod.brand === brand
  })

  return product.map(product => (
    <div data-testid={product._id} className="card my-3" key={product._id} onClick={() => { add(product._id) }}>
      <img className="card-img-top" src={product.image} alt={product.nameOfProduct} />
      <div className="card-body">
        <h5 className="card-title">{product.nameOfProduct}</h5>
      </div>
      <div className="card-footer justify-content-center">
        S/. {product.price}
      </div>
    </div>
  ))
};

export default Product;