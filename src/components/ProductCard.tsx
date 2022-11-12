import ProductDetail from "@/pages/ProductDetail";
import { Product } from "@/types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import check from "../assets/check.jpg";

const ProductCard = (item: Product) => {
  const [prod, setProd] = useState({});
  const link = `/items/${item.id}`;
  const navigate = useNavigate();

  const handleClickDetail = (item: any) => {
    setProd(item);
    navigate(`/items/${item.id}`);
  };

  return prod ? (
    <>
      <Link to={link}>
        <div className="container__card-product">
          <img
            src={item.thumbnail}
            className="imageCard"
            alt={item.title}
            onClick={handleClickDetail}
          />
          <div className="productData">
            <div className="product__price">
              <>
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                  maximumFractionDigits: 0,
                }).format(item.price)}
                <img src={check} className="iconVerif" alt="iconVerified" />
                <p className="product__location">{item.address?.state_name}</p>
              </>
            </div>
            <p className="product__description">{item.title}</p>
          </div>
        </div>
      </Link>
    </>
  ) : (
    <ProductDetail />
  );
};

export default ProductCard;
