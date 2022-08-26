import { useSelector } from "react-redux";
import { selectCartState } from "../../store/cart-reducer";
import { CartList } from "../cartList";
import { SideCartContainer } from "./style"

interface ISideCart{
    open: boolean;
    openClose: ()=>void
}

const SideCart = ({open, openClose}:ISideCart)=>{
    const cartState = useSelector(selectCartState)

    const total = cartState.length ? cartState.reduce((acc,elem)=>acc+elem.qtd*Number(elem.price),0).toFixed(2) : "0,00"

    return(
        <SideCartContainer open={open}>
            <header>
                <h2>
                    Carrinho de Compras
                </h2>
                <span onClick={openClose} >
                    x
                </span>
            </header>
            
                <CartList/>

            <section>
                <span>Total:</span>
                <span>R${total}</span>
            </section>
            <div>
                <button>
                    Finalizar Compra
                </button>
            </div>
        </SideCartContainer>
    )
}  
export default SideCart
