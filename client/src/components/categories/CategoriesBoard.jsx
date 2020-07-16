import React from 'react';
import CategoriesBox from './CategoriesBox';
import './Categories.css';
import { Grid } from 'semantic-ui-react';

export default function CategoriesBoard({ categories }) {
  const renderCategories = categories.map(x => (
    <CategoriesBox key={x.name} name={x.name} products={x.products} id={x.id} />
  ));
  return (
    <Grid className='categories__main'>
      <Grid.Row stretched>{renderCategories}</Grid.Row>
    </Grid>
  );
}
