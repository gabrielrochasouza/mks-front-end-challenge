import { useEffect, useState } from "react";
import { api } from "../../services";
import CardCard from "../cartCard"
import CartIcon from "../cartIcon";
import ShoppingBagIcon from "../shoppingBag";
import { CartListContainer } from "./style";

export const CartList = ()=>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
      api
        .get("products?page=1&rows=20&sortBy=id&orderBy=DESC")
        .then((res) => {
          setProducts(res.data.products);
        })
        .catch((err) => console.log(err));
    }, []);
    //recebe o array do cart
    return(
        <CartListContainer>
            <div className="empty">
                <ShoppingBagIcon/>
                <span>
                Adicione Algo!
                </span>
            </div>
            
        </CartListContainer>
    )
}