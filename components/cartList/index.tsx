import { useEffect, useState } from "react";
import ShoppingBagIcon from "../shoppingBag";
import { CartListContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { selectCartState, addProduct } from "../../store/cart-reducer";
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
