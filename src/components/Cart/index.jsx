import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import { CartEmpty, CartTitle, ContainerCart } from "./styles";

const Cart = ({ currentSale, setCurrentSale }) => {
  function removeProduct(id) {
    setCurrentSale(currentSale.filter((elem) => elem.id !== id));
  }

  return (
    <ContainerCart>
      <CartTitle>
        <h2>Carrinho de compras</h2>
      </CartTitle>

      {currentSale.length > 0 ? (
        <>
          <ul>
            {currentSale.map((elem) => (
              <CartProduct
                img={elem.img}
                name={elem.name}
                category={elem.category}
                fun={removeProduct}
                id={elem.id}
                key={elem.id}
              />
            ))}
          </ul>
          <CartTotal
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </>
      ) : (
        <CartEmpty>
          <h2>Sua sacola está vazia</h2>
          <span>Adicione itens</span>
        </CartEmpty>
      )}
    </ContainerCart>
  );
};

export default Cart;
