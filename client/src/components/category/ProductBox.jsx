import React from 'react';
import { Card, Grid, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { capitalize } from '../../helpers/capitalize';
import './Products.css';

export default function ProductBox({ img, alt, name, labels, id }) {
  let renderLabels = [];
  if (labels) {
    const labelsArray = labels.replace('en:', '').replace(/-/g, ' ').split(',');
    renderLabels = labelsArray.map(item => (
      <Label color='green' className='products__label' key={item}>
        {capitalize(item).trim()}
      </Label>
    ));
  } else {
    renderLabels = '';
  }
  return (
    <Grid.Column as={Link} to={`/products/${id}`} mobile={16} tablet={8} computer={5} className='products__grid'>
      <Card className='products__card'>
        <Image
          src={
            img
              ? img
              : 'https://www.midamericafordmeet.com/wp-content/uploads/2016/07/NoImageAvailable.jpg'
          }
          alt={alt}
          className='products__image'
        />
        <Card.Content>
          <Card.Header className='products__header'>{name}</Card.Header>
          {renderLabels}
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}
