export interface Product {
  id: string;
  title: string;
  price: number;
  prices?: PriceProduct;
  thumbnail: string;
  picture?: string;
  condition: string;
  free_shipping?: boolean;
  address?: Address;
}

export interface Address {
  state_name?: string;
}
export interface ProductDetailType extends Product {
  pictures?: any[] | never[];
  sold_quantity: number;
  category_id: string;
}

export interface GetProducts {
  author: AuthorType;
  categories?: string[];
  items: Product[];
}

export interface AuthorType {
  name: string;
  lastname: string;
}

export interface PriceProduct {
  prices: PricesType[];
  currency: string;
  amount: number;
  decimals: number;
}

export interface PricesType {
  id: number;
  amount: number;
  currency_id: string;
}
export interface CategoriesType {
  id: string;
  name: string;
  path_from_root?: CategoryIds[];
}
export interface CategoryIds {
  id: string;
  name: string;
}
