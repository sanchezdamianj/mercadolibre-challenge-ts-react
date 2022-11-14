import { ProductDetailType } from "@/types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import check from "../assets/check.jpg";

const ProductCard = (item: ProductDetailType) => {
  const [prod, setProd] = useState({});
  const link = `/items/${item.id}`;
  const navigate = useNavigate();

  const handleClickDetail = (item: ProductDetailType) => {
    setProd(item);
    navigate(`/items/${item.id}`);
  };

  return (
    <>
      {prod && (
        <Link to={link}>
          <div className="container__card-product">
            <img
              src={item.picture}
              className="imageCard"
              alt={item.title}
              onClick={() => handleClickDetail(item)}
            />
            <div className="productData">
              <div className="product__price">
                <>
                  {new Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    maximumFractionDigits: item.price.decimals,
                  }).format(item.price.amount)}
                  <img src={check} className="iconVerif" alt="iconVerified" />
                  <p className="product__location">{item.address}</p>
                </>
              </div>
              <p className="product__description">{item.title}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default ProductCard;
