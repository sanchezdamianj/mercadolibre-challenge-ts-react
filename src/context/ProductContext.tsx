import React, { createContext, useContext, useState, useEffect } from "react";

export const ProductContext = createContext<ContextProduct | null>(null);

interface ContextProduct {
  products: StateProduct[];
}

type Props = {
  children: JSX.Element;
};

interface StateProduct  {
  productId: string;
  productCategoryId: string;
};

const ProductProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<ContextProduct >([]);

  const addProduct = ({productId, productCategoryId}: StateProduct) => {
    setProducts([...products, { productId, productCategoryId }]);
  };
  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProductContext = () => {
  return useContext(ProductContext);
};
