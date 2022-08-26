import { HeaderComponent } from "./style";
import CartIcon from '../cartIcon/index'
import SideCart from "../sidecart/index";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartState } from "../../store/cart-reducer";

const Header = () => {
  const [open, setOpen] = useState(false)
  const openClose = ()=>setOpen(!open)

  const cartState = useSelector(selectCartState)
  const totalQuantity = cartState.reduce((acc,elem)=>acc+elem.qtd,0)

  return (
    <HeaderComponent>
      <div >
        <h1 >
          <span >MKS</span>
          <span > Sistemas</span>
        </h1>

        <div onClick={openClose}>
          <CartIcon/>
          <span >{totalQuantity}</span>
        </div>
      </div>
      <SideCart open={open} openClose={openClose}/>
    </HeaderComponent>
  );
};

export default Header;
