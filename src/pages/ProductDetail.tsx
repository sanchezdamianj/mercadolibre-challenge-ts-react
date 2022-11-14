import {
  fetchProductDetail, getProductDescription
} from "@/apiConfig";
import BreadCrumbCategory from "@/components/Category";
import { ProductDetailType } from "@/types";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ProductDetail = (): JSX.Element => {
  const [prod, setProd] = useState<ProductDetailType>();
  const [isLoading, setIsLoading] = useState(false);
  const id = window.location.pathname;
  const [description, setDescription] = useState("");

  useEffect(() => {
    const position = id.indexOf("/", 2);
    const parseString = id.substring(position);
    setIsLoading(true);
    fetchProductDetail(`${parseString}`)
      .then((res) => res.json())
      .then((data) => {
        setProd(data);
        setIsLoading(false);
      });
    getProductDescription(parseString.toString())
      .then((res) => res.json())
      .then((data) => {
        setDescription(data.plain_text);
      });
  }, [id]);

  return !isLoading ? (
    <>
      {prod && (
        <>
          <BreadCrumbCategory category={prod.category_id} />
          <div className="grid-detailContainer">
            <div className="productImgDesc">
              <img
                className="detailImg"
                src={
                  prod.pictures ? prod.pictures[0].secure_url : prod.thumbnail
                }
                alt={prod.title}
              />
              <h3 className="titleDescription">Description del Producto</h3>
              <p className="detailDescription">{description}</p>
            </div>
            <div className="productInfo">
              <div className="condition">
                {prod.condition === "new" ? "Nuevo " : "Usado "}
                <div className="itemsQuantity">
                  - {prod.sold_quantity} vendidos
                </div>
              </div>
              <p className="titleDetail">{prod.title}</p>
              <span className="priceDetail">
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                  maximumFractionDigits: 0,
                }).format(prod.price)}
              </span>
              <button className="btn-purchase">
                <span>Comprar</span>
              </button>
            </div>
          </div>
        </>
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
