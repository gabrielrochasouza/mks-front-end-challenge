import { CardContainer } from "./style";
import { IProduct } from "../../interfaces/index";

interface ICard {
  product: IProduct;
}

const Card = ({ product }: ICard) => {
  return (
    <CardContainer>
      <figure>
        <figcaption>{product.name}</figcaption>
        <img src={product.photo} alt={product.name} />
      </figure>

      <div>
        <h3>{product.name}</h3>
        <span>R${product.price.slice(0, -3)}</span>
      </div>

      <p>{product.description}</p>

      <button>
        <span>COMPRAR</span>
      </button>
    </CardContainer>
  );
};

export default Card;
