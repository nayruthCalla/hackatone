import React, { useState } from "react";
import styled from 'styled-components'
import Button from '../Generics/button'

const Esika = ({ allProducts, addProduct }) => {
  const [product, setProduct] = useState([...allProducts]);

  const filterFragrance = products => {
    setProduct(allProducts);
    let newArray = [];
    products.filter(element => {
      if (element.type === "FRAGANCIAS") {
        newArray.push(element);
      }
      return newArray;
    });
    return setProduct(newArray);
  };

  return (
    <>
      <Button
        onclick={() => {
          filterFragrance(allProducts);
        }}
      />

      <SubButton productElement={product} addProduct={addProduct} />
    </>
  );
};
export default Esika;
