import { CardContainer } from "./style";
import { IProduct } from "../../interfaces/index";
import ShoppingBagIcon from "../shoppingBag";

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
        <h3>{product.brand} {product.name}</h3>
        <span>R${product.price.slice(0, -3)}</span>
      </div>

      <p>{product.description}</p>
      <span className="see-more">Ver Mais...</span>
      <button>
        <ShoppingBagIcon/>
        <span>COMPRAR</span>
      </button>
    </CardContainer>
  );
};

export default Card;
