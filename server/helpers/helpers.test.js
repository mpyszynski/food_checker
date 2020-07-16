const { filterQuantity } = require('./helpers');

let mockArray = [];

beforeEach(() => {
  mockArray = [
    {
      products: 61,
      name: 'en:Beverages',
    },
    {
      products: 52,
      name: 'en:Groceries',
    },
    {
      name: 'en:Salts',
      products: 4,
    },
    {
      name: 'en:Ketchup',
      products: 3,
    },
  ];
});

describe('Test filtering by quantity functionality', () => {
  test('should return array', () => {
    expect(filterQuantity(mockArray)).toBeInstanceOf(Array);
  });
  test('should filter out categories with less than 5 products', () => {
    const filteredArray = filterQuantity(mockArray);
    expect(filteredArray).not.toContain(mockArray[2]);
    expect(filteredArray).not.toContain(mockArray[3]);
  });
});
