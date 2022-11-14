export const fetchProducts = (query: string) => {
  return fetch(`http://localhost:3000/api/items?q=${query}`);
};

export const fetchProductDetail = (itemId: string) => {
  return fetch(`http://localhost:3000/api/items${itemId}`);
};

export const getCategoryDetail = (id: string) => {
  return fetch(`https://api.mercadolibre.com/categories/${id}`);
  // return fetch(`http://localhost:3000/api/categories/${id}`);
};
