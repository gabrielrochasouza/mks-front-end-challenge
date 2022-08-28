import CardSkeleton from "../cardSkeleton"
import { ProductsContainer } from "../products/style"

interface IProductsSkeleton{
    listLength?:number
}

const ProductsSkeleton = ({listLength=8}:IProductsSkeleton)=>{
    const skeletonList = Array(listLength).fill({})
    return(
        <ProductsContainer data-testid="skeleton-list">
            {skeletonList.map((e,i)=><CardSkeleton key={i}/>)}
        </ProductsContainer>
    )
}
export default ProductsSkeleton