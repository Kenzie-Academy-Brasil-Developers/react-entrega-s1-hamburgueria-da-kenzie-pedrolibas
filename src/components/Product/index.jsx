import { Card } from "./styles";

const Product = ({ name, category, price, img, id, fun, alert }) => {
  return (
    <Card alert={alert}>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
        <span>{category}</span>
        <strong>R$ {price}</strong>
        <button onClick={() => fun(id)}>Adicionar</button>
      </div>
    </Card>
  );
};

export default Product;
