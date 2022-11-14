import { fetchProducts } from "@/apiConfig";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "../assets/ic_Search.png";
import logo from "../assets/Logo_ML.png";

const Header = (): JSX.Element => {
  const [keyword, setKeyword] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  const home = () => {
    setKeyword("");
    navigate("/");
    setCategories([]);
  };

  const handleSearch = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setKeyword(keyword.trim());

    if (keyword.length > 0) {
      fetchProducts(keyword as string)
        .then((res) => res.json())
        .then((data) => {
          if (keyword.includes("MLA")) {
            navigate(`/items/${keyword.toString()}`);
          } else {
            navigate(`/items?search=${keyword}`);
          }
          if (data.filters[0].values) {
            setCategories(data.filters[0].values);
          }
        })
        .catch((error: any) => {
          throw new Error(error.message);
        });
    }
  };

  return (
    <>
      <div className="header">
        <div className="header__container">
          <form className="header__input-container" onSubmit={handleSearch}>
            <img
              className="logo"
              src={logo}
              alt="Mercado Libre Logo Oficial"
              onClick={home}
            />
            <input
              type="text"
              id="search"
              placeholder="Nunca dejes de buscar"
              value={keyword}
              onChange={handleChange}
            />
            <button type="submit" className="search-button" id="search-button">
              <img className="search-icon" src={search} alt="search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
