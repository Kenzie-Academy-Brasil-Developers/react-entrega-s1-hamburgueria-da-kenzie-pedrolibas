import { ContainerHeader } from "./styles";
import Logo from "../../assets/Mask Group.svg";

const Header = ({ filteredProducts, setProducts }) => {

  function filter(value) {
    value === ""
      ? setProducts(filteredProducts)
      : setProducts(
          filteredProducts.filter(
            (elem) =>
              elem.name.toLowerCase().includes(value.toLowerCase())||
              elem.category.toLowerCase().includes(value.toLowerCase())
          )
        );
  }
  return (
    <ContainerHeader>
      <img
        src={Logo}
        alt=""
        onClick={() => {
          setProducts(filteredProducts);
        }}
      />
      <div>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(e) => filter(e.target.value)}
        />
        <button>Pesquisar</button>
      </div>
    </ContainerHeader>
  );
};

export default Header;
