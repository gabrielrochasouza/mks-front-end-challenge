import Image from "next/image"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { IProductCart } from "../../interfaces"

import { removeOneProduct, removeProduct, addProduct } from "../../store/cart-reducer"
import { CartCardContainer } from "./style"

interface ICart{
    product: IProductCart
}

const CardCard = ({product}:ICart)=>{
    const dispatch = useDispatch()
    return(
        <CartCardContainer>
            <figure>
                <figcaption>
                {product.name} {product.description}
                </figcaption>
                <Image width={50} height={52} src={product.photo} alt={product.name}/>
            </figure>
            <span className="card-title">
            {product.brand} {product.name}
            </span>
            <div className="qtd-box">
                <span className="qtd">
                    Qtd:
                    <div className="qtd-controller">
                        <span onClick={()=>{
                            toast.success(product.brand +product.name +" retirado")
                            dispatch(removeOneProduct(product))
                        }} className="controller"> - </span>
                        <span className="qtd-num"> {product.qtd} </span>
                        <span onClick={()=>{
                            toast.success(product.brand +product.name +" adicionado")
                            dispatch(addProduct(product))
                        }} className="controller"> + </span>
                    </div>
                </span>

            </div>
            <span className="price">
                R${product.price}
            </span>
            <div onClick={()=>dispatch(removeProduct(product))} className="close-btn">
                X
            </div>
        </CartCardContainer>
    )

}

export default CardCard
