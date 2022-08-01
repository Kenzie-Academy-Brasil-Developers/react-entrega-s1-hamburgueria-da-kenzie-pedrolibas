import { ContainerHeader } from "./styles";
import Logo from "../../assets/Mask Group.svg";
import { useState } from "react";

const Header = ({ filteredProducts, setProducts }) => {
  const [productFilter, setProductFilter] = useState("");

  function filter() {
    productFilter === ""
      ? setProducts(filteredProducts)
      : setProducts(
          filteredProducts.filter(
            (elem) =>
              elem.name.toLowerCase() === productFilter.toLowerCase() ||
              elem.category.toLowerCase() === productFilter.toLowerCase()
          )
        );
    setProductFilter("");
  }
  return (
    <ContainerHeader>
      <img
        src={Logo}
        alt=""
        onClick={() => {
          setProducts(filteredProducts);
          setProductFilter("");
        }}
      />
      <form onSubmit={(e) => filter(e.preventDefault())}>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(e) => setProductFilter(e.target.value)}
          value={productFilter}
        />
        <button type="submit">Pesquisar</button>
      </form>
    </ContainerHeader>
  );
};

export default Header;
