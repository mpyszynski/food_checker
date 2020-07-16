export const getProducts = () => {
  return [
    {
      product_name: 'Boisson Amande Calcium',
      _id: '8428532230078',
      labels:
        'Organic,Vegetarian,EU Organic,Gluten-free,Vegan,ES-ECO-020-CV,Green Dot,No lactose,fi:🚮',
      image_url:
        'https://static.openfoodfacts.org/images/products/842/853/223/0078/front_fr.56.400.jpg',
    },
    {
      product_name: 'Sunarek',
      _id: '8592084413668',
      labels: 'en:gluten-free',
      image_url:
        'https://static.openfoodfacts.org/images/products/859/208/441/3668/front_en.7.400.jpg',
    },
    {
      product_name: 'Lipton Thé Noir Rich Earl Grey 25 Sachets',
      _id: '8712100619922',
      labels: 'Point Vert, PEFC, Rainforest Alliance',
      image_url:
        'https://static.openfoodfacts.org/images/products/871/210/061/9922/front_fr.78.400.jpg',
    },
  ];
};

export const getProduct = () => {
  return {
    allergens: 'en:nuts',
    brands: 'Ecomil',
    image_url:
      'https://static.openfoodfacts.org/images/products/842/853/223/0078/front_fr.56.400.jpg',
    image_ingredients_url:
      'https://static.openfoodfacts.org/images/products/842/853/223/0078/ingredients_fr.38.400.jpg',
    ingridients: [
      'en:water',
      'en:almond',
      'en:nut',
      'en:agave-syrup',
      'en:corn-maltodextrin',
      'en:maltodextrins',
      'fr:algue-marine-calcaire',
      'en:lithothamnium-calcareum',
      'en:algae',
    ],
    product_name: 'Boisson Amande Calcium',
    labels:
      'Organic,Vegetarian,EU Organic,Gluten-free,Vegan,ES-ECO-020-CV,Green Dot,No lactose,fi:🚮',
    nutriments: {
      carbohydrates: 5.4000000953674,
      'energy-kcal': 46,
      fat: 2.0999999046326,
      proteins: 0.89999997615814,
    },
    quantity: '1 l',
    packaging: 'Tetra Pak,FSC',
    serving_size: '250ml',
  };
};
