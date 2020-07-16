const express = require('express');
const axios = require('axios');
const path = require('path');
const { filterQuantity } = require('./helpers/helpers');

const app = express();
const port = 8080;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('/', (req, res) => {
  res.send('Valid endpoints: /categories, /categories/:name, /products/:id');
});

app.get('/categories', async (req, res) => {
  const categiories = await axios.get(
    'https://no.openfoodfacts.org/categories.json',
    {
      headers: {
        'User-Agent': 'consciousFoodChoices - Desktop - Version 1.0',
      },
    },
  );
  const filteredCategories = filterQuantity(categiories.data.tags);
  res.json(filteredCategories);
});

app.get('/categories/:name', async ({ params: { name } }, res) => {
  try {
    const products = await axios.get(
      `https://no.openfoodfacts.org/category/${name}.json`,
      {
        headers: {
          'User-Agent': 'consciousFoodChoices - Desktop - Version 1.0',
        },
      },
    );
    res.json(products.data.products);
  } catch (error) {
    console.log(error);
  }
});

app.get('/products/:id', async ({ params: { id } }, res) => {
  const products = await axios.get(
    `https://no.openfoodfacts.org/api/v0/product/${id}.json`,
    {
      headers: {
        'User-Agent': 'consciousFoodChoices - Desktop - Version 1.0',
      },
    },
  );
  res.json(products.data.product);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
});

app.listen(port, () => console.log(`Server is listening at localhost:${port}`));
