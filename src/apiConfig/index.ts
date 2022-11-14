const baseUrl = "https://api.mercadolibre.com";

export const fetchProducts = (query: string) => {
  return fetch(`http://localhost:3000/api/items?q=${query}`);
};

export const fetchProductDetail = (itemId: string) => {
  return fetch(`${baseUrl}/items/${itemId}`);
};
export const getProductDescription = (itemId: string) => {
  return fetch(`${baseUrl}/items/${itemId}/description`);
};

export const getCategoryDetail = (id: string) => {
  return fetch(`${baseUrl}/categories/${id}`);
};
