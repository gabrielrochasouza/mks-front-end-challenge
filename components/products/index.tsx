import { ProductsContainer } from "./style";
import { useState, useEffect } from "react";
import { api } from "../../services/index";
import Card from "../card/index";
import ProductsSkeleton from "../productsSkeleton";
import { act } from "@testing-library/react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api
      .get("products?page=1&rows=20&sortBy=id&orderBy=DESC")
      .then((res) => {
        if(process.env.TEST){
          act(()=>setProducts(res.data.products)) 
        }else{
          setProducts(res.data.products)
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
        {products.length ? (
          <ProductsContainer data-testid="list-products">
            {products.map((product) => <Card key={product.id} product={product} />)}
          </ProductsContainer>
          ) : (
            <ProductsSkeleton data-testid="list-skeleton"/>
          )}
    </>
  );
};

export default Products;
