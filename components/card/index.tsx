import { CardContainer } from "./style";
import { IProduct } from "../../interfaces/index";
import ShoppingBagIcon from "../shoppingBag";
import Image from "next/image";


interface ICard {
  product: IProduct;
}

const Card = ({ product }: ICard) => {
  return (
    <CardContainer>
      <figure>
        <figcaption>{product.name}</figcaption>
        <Image width={227.5} height={158} src={product.photo} alt={product.name} />
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
