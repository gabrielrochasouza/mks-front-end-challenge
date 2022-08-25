import { HeaderComponent } from "./style";
import CartIcon from '../cartIcon/index'
import SideCart from "../sidecart/index";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false)
  const openClose = ()=>setOpen(!open)
  return (
    <HeaderComponent>
      <div >
        <h1 >
          <span >MKS</span>
          <span > Sistemas</span>
        </h1>

        <div onClick={openClose}>
          <CartIcon/>
          <span >0</span>
        </div>
      </div>
      <SideCart open={open} openClose={openClose}/>
    </HeaderComponent>
  );
};

export default Header;
