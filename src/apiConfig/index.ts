const baseUrl = "https://api.mercadolibre.com";

export const fetchProducts = (query: string) => {
  const keyword = query.substring(query.indexOf("="));
  return fetch(`${baseUrl}/sites/MLA/search?q=${keyword}`);
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
