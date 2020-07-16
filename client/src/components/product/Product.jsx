import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { getProduct } from '../../mockCalls/mockProducts';
import { Card, Image, Button } from 'semantic-ui-react';
import ProductTable from './ProductTable';
import CustomTable from './CustomTable';
import NutrientTable from './NutrientTable';
import './Product.css';
import transformLabels from '../../helpers/transformLabels';
import { Link } from 'react-router-dom';

export default function Product() {
  const [product, setProduct] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/products/${id}`).then(res => setProduct(res.data));
    // setTimeout(() => setProduct(getProduct()), 1000);
  }, []);
  const renderLabels = product.labels ? transformLabels(product.labels) : [];
  // console.log(product.categories_tags);
  let category = '/'
  product.categories_tags ? category = `/categories/${product.categories_tags[0]}` : category = '/'
  return (
    <Card className='product__main'>
      {product === '' ? (
        <h1>Loading...</h1>
      ) : (
        <>
        <div className='product__image'> 
        <Image src={product.image_url} />
        </div>
          
          <Card.Content>
            <Card.Header>{product.product_name}</Card.Header>
            <div className='product__descr'>
              <Card.Meta>Brand: {product.brands}</Card.Meta>
              {product.allergens && (
                <Card.Meta>Allergens: {product.allergens.replace(/(en|no):/g, '')}</Card.Meta>
              )}
              {product.quantity && (
                <Card.Meta>Quantity: {product.quantity}</Card.Meta>
              )}

              {product.serving_size && (
                <Card.Meta>Serving size: {product.serving_size}</Card.Meta>
              )}
              {product.packaging && (
                <Card.Meta>
                  Packaging: {product.packaging.replace(',', ', ')}
                </Card.Meta>
              )}
            </div>
            {product.nutriments['energy-kcal'] ? (
              <Card.Content>
                <Card.Header>Nutriments</Card.Header>
                <CustomTable firstCell='Nutriment' secondCell='per 100g'>
                  <NutrientTable nutriments={product.nutriments} />
                </CustomTable>
              </Card.Content>
            ) : (
              ''
            )}

            {product.ingredients_hierarchy ? (
              <Card.Content>
                <Card.Header>Ingridients</Card.Header>
                {product.image_ingredients_url ? (
                  <Image
                    src={product.image_ingredients_url}
                    alt='ingridients'
                  />
                ) : (
                  ''
                )}

                <CustomTable firstCell='Index' secondCell='Ingridient'>
                  <ProductTable ingridients={product.ingredients_hierarchy} />
                </CustomTable>
              </Card.Content>
            ) : (
              ''
            )}
            {renderLabels.length === 0 ? (
              ''
            ) : (
              <>
                <Card.Meta>Labels:</Card.Meta>
                {renderLabels}
              </>
            )}
          </Card.Content>
        </>
      )}
      <Button as={Link} to={category.replace('en:', '')}>Back</Button>
    </Card>
  );
}
