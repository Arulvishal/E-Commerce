import Product from "../../Data/product";
import ProductCard from "../Layout/Productsty";
import ProductsWrapper from "../Layout/ProductsWrapper";

export default function ProductsList() {
  return (
    <ProductsWrapper>
    {Product.map((val,id)=>(
        <ProductCard key={id} {...val} />
    ))}
   </ProductsWrapper>
  )
}