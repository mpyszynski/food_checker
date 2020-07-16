export const filterCategories = (array, condition) => {
  return array.filter(x => x.name.toLowerCase().includes(condition));
};
export const filterProducts = (array, condition) => {
  return array
    .filter(x => {
      if (x.product_name) return x;
      return false
    })
    .filter(x => x.product_name.toLowerCase().includes(condition));
};
