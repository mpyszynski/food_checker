import { filterCategories } from './filterCategories';
import { getCategories } from '../mockCalls/mockCategories';

let mockArray = [];

beforeEach(() => {
  mockArray = getCategories();
});

describe('Test filtering function', () => {
  test('should return one item', () => {
    expect(filterCategories(mockArray, 'groceries').length).toEqual(1)
    expect(filterCategories(mockArray, 'groceries')).not.toContain(
      mockArray[1]
    );
  });
  test('should return two items', () => {
    expect(filterCategories(mockArray, 'beverages').length).toEqual(2)
    expect(filterCategories(mockArray, 'beverages')).not.toContain(
      mockArray[2]
    );
  });
});
