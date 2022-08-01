import { CartCard } from "./styles";

const CartProduct = ({ img, name, category, fun, id }) => {
  return (
    <CartCard>
      <img src={img} alt="teste" />
      <div>
        <h2>{name}</h2>
        <span>{category}</span>
      </div>
      <button onClick={() => fun(id)}>Remover</button>
    </CartCard>
  );
};

export default CartProduct;
