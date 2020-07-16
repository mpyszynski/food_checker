import React from 'react';
import ProductBox from './ProductBox';
import { Grid } from 'semantic-ui-react';
import './Products.css';

export default function ProductsBoard({ products }) {
  const renderProducts = products
    .filter(x => {
      if (x.product_name) return x;
      return false
    })
    .map(x => (
      <ProductBox
        key={x.product_name}
        img={x.image_url}
        alt={x.product_name}
        name={x.product_name}
        labels={x.labels}
        id={x._id}
      />
    ));
  return (
    <Grid className='products__main'>
      <Grid.Row stretched>{renderProducts}</Grid.Row>
    </Grid>
  );
}
