import React from 'react';
import { Row } from 'reactstrap';
import ProductCard from './ProductCard';

function ProductList({data}) {
  return (
    <>
      {data?.map((item, index) => (
        <ProductCard item={item} key={index}/>
      ))}
    </>
  )
}

export default ProductList