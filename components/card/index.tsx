import { CardContainer } from "./style";
import { IProduct } from "../../interfaces/index";
import ShoppingBagIcon from "../shoppingBag";
import Image from "next/image";

import { selectCartState, addProduct } from "../../store/cart-reducer"; 
import {useDispatch, useSelector} from 'react-redux'
import toast from "react-hot-toast";


export interface ICard {
  product: IProduct;
}

const Card = ({ product }: any) => {
  const dispatch = useDispatch()
  const cartState = useSelector(selectCartState)


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
      <button onClick={()=>{
        toast.success(product.brand + product.name +" adicionado ao carrinho!")
        dispatch(addProduct(product))
      }}>
        <ShoppingBagIcon/>
        <span>COMPRAR</span>
      </button>
    </CardContainer>
  );
};

export default Card;
