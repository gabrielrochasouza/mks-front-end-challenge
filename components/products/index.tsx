import { ProductsContainer } from "./style";
import { useState, useEffect } from "react";
import { api } from "../../services/index";
import Card from "../card/index";
import ProductsSkeleton from "../productsSkeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api
      .get("products?page=1&rows=20&sortBy=id&orderBy=DESC")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductsContainer>
      {products.length ? (
        products.map((product) => <Card key={product.id} product={product} />)
      ) : (
        <ProductsSkeleton/>
      )}
    </ProductsContainer>
  );
};

export default Products;
