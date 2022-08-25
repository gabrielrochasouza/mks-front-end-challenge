import { ProductsSkeletonContainer } from "./style"
import CardSkeleton from "../cardSkeleton"

const ProductsSkeleton = ()=>{
    const skeletonList = Array(8).fill({})
    return(
        <ProductsSkeletonContainer>
            {skeletonList.map(e=><CardSkeleton/>)}
        </ProductsSkeletonContainer>
    )
}
export default ProductsSkeleton