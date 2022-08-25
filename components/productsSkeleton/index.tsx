import CardSkeleton from "../cardSkeleton"

interface IProductsSkeleton{
    listLength?:number
}

const ProductsSkeleton = ({listLength=8}:IProductsSkeleton)=>{
    const skeletonList = Array(listLength).fill({})
    return(
        <>
            {skeletonList.map((e,i)=><CardSkeleton key={i}/>)}
        </>
    )
}
export default ProductsSkeleton