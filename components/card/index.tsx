import { CardContainer } from "./style";
import ShoppingBagIcon from "../shoppingBag";
import Image from "next/image";
import { addProduct } from "../../store/cart-reducer";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { ICard } from "../../interfaces/index";
import { act } from "@testing-library/react";

const Card = ({ product }: ICard) => {
  const dispatch = useDispatch();

  return (
    <CardContainer>
      <figure>
        <figcaption>{product.name}</figcaption>
        <Image
          draggable={false}
          width={227.5}
          height={158}
          src={product.photo}
          alt={product.name}
        />
      </figure>
      <div data-testid="info">
        <h3>
          {product.brand} {product.name}
        </h3>
        <span>R${product.price.slice(0, -3)}</span>
      </div>
      <p data-testid="desc">{product.description}</p>
      <span className="see-more">Ver Mais...</span>
      <button
        data-testid="add"
        onClick={() => {
          toast.success(
            product.brand + product.name + " adicionado ao carrinho!"
          );
          dispatch(addProduct(product));
        }}
      >
        <ShoppingBagIcon />
        <span data-testid={`add${product.id}`}>COMPRAR</span>
      </button>
    </CardContainer>
  );
};

export default Card;
