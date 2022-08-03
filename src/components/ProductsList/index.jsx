import toast from "react-hot-toast";
import Product from "../Product";
import { List } from "./styles";

const ProductsList = ({ products, setCurrentSale, currentSale }) => {
  function addCart(id) {
    !currentSale.some((elem) => elem.id === id)
      ? setCurrentSale((old) => [
          ...old,
          products.find((elem) => elem.id === id),
        ])
      : toast.error("Item já adicionado no carrinho");
  }

  return (
    <>
      <List>
        {products.map((elem) => (
          <Product
            name={elem.name}
            category={elem.category}
            price={elem.price}
            img={elem.img}
            key={elem.id}
            id={elem.id}
            fun={addCart}
            alert={alert}
          />
        ))}
      </List>
    </>
  );
};

export default ProductsList;
