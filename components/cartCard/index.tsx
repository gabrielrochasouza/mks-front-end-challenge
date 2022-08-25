import { IProductCart } from "../../interfaces"
import { CartCardContainer } from "./style"

interface ICart{
    product: IProductCart
}

const CardCard = ({product}:ICart)=>{

    return(
        <CartCardContainer>
            <figure>
                <figcaption>
                {product.name} {product.description}
                </figcaption>
                <img src={product.photo} alt={product.name}/>
            </figure>
            <span className="card-title">
            {product.name}
            </span>
            <div className="qtd-box">
                <span className="qtd">
                    Qtd:
                    <div className="qtd-controller">
                        <span className="controller"> - </span>
                        <span className="qtd-num"> 1 </span>
                        <span className="controller"> + </span>
                    </div>
                </span>

            </div>
            <span className="price">
                R${product.price}
            </span>
            <div className="close-btn">
                X
            </div>
        </CartCardContainer>
    )

}

export default CardCard
