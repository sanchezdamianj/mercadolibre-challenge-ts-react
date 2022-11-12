import {
  fetchProductDetail,
  getCategoryDetail,
  getProductDescription,
} from "@/apiConfig";
import BreadCrumb from "@/components/BreadCrumbCategories";
import { ProductDetailType, CategoriesType } from "@/types";
// import BreadCrumb from "@/components/BreadCrumbCategories";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";


const ProductDetail = (): JSX.Element => {
  const [item, setItem] = useState<ProductDetailType>();
  const [isLoading, setIsLoading] = useState(false);
  const id = window.location.pathname;

  const [categoryId, setCategoryId] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const position = id.indexOf("/", 2);
    const parseString = id.substring(position);
    setIsLoading(true);
    fetchProductDetail(`${parseString}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setCategoryId(data.category_id);
        setIsLoading(false);
      });
    getProductDescription(parseString.toString())
      .then((res) => res.json())
      .then((data) => {
        setDescription(data.plain_text);
      });
    // getCategoryDetail(categoryId)
    // .then((res) => res.json())
    // .then((data) => {
    //   setCategory(data.path_from_root)
    // });
  }, [id]);

  return !isLoading ? (
    <>
      {/* <BreadCrumb categories={category} /> */}
      {item && (
        <div className="grid-detailContainer">
          <div className="productImgDesc">
            <img
              className="detailImg"
              src={item.pictures ? item.pictures[0].secure_url : item.thumbnail}
              alt={item.title}
            />
            <h3 className="titleDescription">Description del Producto</h3>
            <p className="detailDescription">{description}</p>
          </div>
          <div className="productInfo">
            <div className="condition">
              {item.condition === "new" ? "Nuevo " : "Usado "}
              <div className="itemsQuantity">
                - {item.sold_quantity} vendidos
              </div>
            </div>
            <p className="titleDetail">{item.title}</p>
            <span className="priceDetail">
              {(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 0,
              }).format((item.price)))}
            </span>
            <button className="btn-purchase">
              <span>Comprar</span>
            </button>
          </div>
        </div>
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

export default ProductDetail;
