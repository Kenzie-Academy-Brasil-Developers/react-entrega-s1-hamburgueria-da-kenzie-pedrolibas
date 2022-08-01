import { CartValue } from "./styles";
import formatValue from "../../util";

const CartTotal = ({ currentSale, setCurrentSale }) => {
  function cleanCart() {
    setCurrentSale([]);
  }

  return (
    <CartValue>
      <div>
        <h3>Total</h3>
        <span>
          {formatValue(
            currentSale.reduce((acc, atual) => acc + atual.price, 0)
          )}
        </span>
      </div>
      <button onClick={cleanCart}>Remover Todos</button>
    </CartValue>
  );
};

export default CartTotal;
