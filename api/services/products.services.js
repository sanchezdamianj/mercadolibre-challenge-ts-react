const axios = require("axios");
const { AUTHOR_NAME, AUTHOR_LASTNAME, BASE_URL } = process.env;

const author = {
  name: AUTHOR_NAME,
  lastName: AUTHOR_LASTNAME,
};

const getCategories = async (id) => {
  const categories = await axios.get(`${BASE_URL}/categories/${id}`);
  return categories;
};

const getProducts = async (query) => {
  const keyword = query.substring(query.indexOf("="));
  const fetched = await axios.get(`${BASE_URL}/sites/MLA/search?q=:${keyword}`);

  const products = await fetched.data.results.map((element) => {
    return {
      id: element.id,
      title: element.title,
      price: {
        currency: element.prices.prices[0].currency_id,
        amount: element.prices.prices[0].amount,
        decimals: 2,
      },
      picture: element.thumbnail,
      condition: element.condition,
      free_shipping: element.shipping.free_shipping,
      address: element.address.state_name,

    };
  });

  const category = await getCategories(fetched.data.results[0].category_id);
  const cateProducts = [category.data.path_from_root[0]];

  return {
    author: author,
    categories: cateProducts,
    items: products,
  };
};

const getProductById = async (id) => {
  const { data: data } = await axios.get(`${BASE_URL}/items/${id}`);
  const description = await axios.get(`${BASE_URL}/items/${id}/description`);
  return {
    author: author,
    item: {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: 2,
      },
      picture: data.thumbnail,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: description.data.plain_text,
    },
  };
};

module.exports = { getCategories, getProducts, getProductById };
