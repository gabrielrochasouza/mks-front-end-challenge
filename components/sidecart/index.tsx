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
            <header data-testid='sideCartTitle'>
                <h2>
                    Carrinho de Compras
                </h2>
                <span onClick={openClose} data-testid='sideCartClose'>
                    x
                </span>
            </header>
            
                <CartList/>

            <section data-testid="sideCartTotal">
                <span>Total:</span>
                <span data-testid="totalPrice">R${total}</span>
            </section>
            <div data-testid="sideCartCheckout">
                <button>
                    Finalizar Compra
                </button>
            </div>
        </SideCartContainer>
    )
}  
export default SideCart
