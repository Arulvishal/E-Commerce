import { Link } from "react-router-dom";
import brands from "../../Data/brand";
import BrandCard from "../Layout/Brandsty";
import ProductsWrapper from "../Layout/ProductsWrapper";

export default function BrandsList() {
  return (
    <ProductsWrapper>
        {brands.map((val,id)=>(
            <Link to={`${val.id}`} key={id}>
                <BrandCard {...val}  />
            </Link>
        ))}
    </ProductsWrapper>
  )
}