import { CartList } from "../cartList";
import { SideCartContainer } from "./style"

interface ISideCart{
    open: boolean;
    openClose: ()=>void
}

const SideCart = ({open, openClose}:ISideCart)=>{

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
                <span>R$ 44,00</span>
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
