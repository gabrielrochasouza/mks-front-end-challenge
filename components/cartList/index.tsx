import ShoppingBagIcon from "../shoppingBag";
import { CartListContainer } from "./style";
import { useSelector } from "react-redux";
import { selectCartState } from "../../store/cart-reducer";
import CardCard from "../cartCard";

export const CartList = () => {
  const cartState = useSelector(selectCartState);

  return (
    <CartListContainer>
      {cartState.length ? (
        cartState.map(product=> <CardCard key={product.id} product={product}/>)
      ) : (
        <div className="empty">
          <ShoppingBagIcon />
          <span>Adicione Algo!</span>
        </div>
      )}
    </CartListContainer>
  );
};
