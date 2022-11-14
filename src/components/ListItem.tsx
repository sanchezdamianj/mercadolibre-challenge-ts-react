import { fetchProducts } from "@/apiConfig";
import { CategoriesType, Product } from "@/types";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BreadCrumb from "./BreadCrumb";
import NonValuesFound from "./NoValuesFound";
import ProductCard from "./ProductCard";

const ListItem: React.FC = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const search = new URLSearchParams(location.search).toString();

  useEffect(() => {
    setIsLoading(true);
    fetchProducts(search as string)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
        setCategories(data.categories);
      })
      .catch((error) => {
        throw new Error(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [search]);

  return !isLoading ? (
    <>
      <BreadCrumb categories={categories} />
      {items.length ? (
        items.slice(1, 5).map((item) => {
          return <ProductCard {...item} key={item.id} />;
        })
      ) : (
        <NonValuesFound />
      )}
    </>
  ) : (
    <div className="spinner">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      />
    </div>
  );
};

export default ListItem;
