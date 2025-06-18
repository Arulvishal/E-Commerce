import ProductsWrapper from "../Layout/ProductsWrapper";
import Product from "../../Data/product"
import Trendsty from "../Layout/Trendsty";
import { FcFlashOn } from 'react-icons/fc';
import { Link } from 'react-router-dom'
import categories from '../../Data/category'
import CategoryCard from '../Layout/Categorysty'
import { MdCategory } from "react-icons/md";

export default function Home() {
  
  return (
    <><div className=" ">
     <div className="flex items-center gap-2 py-4 px-4">
      <FcFlashOn className="text-3xl" />
      <h2 className="text-2xl font-bold text-gray-800">Trending Products</h2>
    </div>
    <ProductsWrapper>
    {Product.map((val,id)=>(
        <Trendsty key={id} {...val} />
        
    ))}
   </ProductsWrapper>
   </div>
    <div className="flex items-center gap-2 py-4 px-4">
      < MdCategory className="text-3xl" />
      <h2 className="text-2xl font-bold text-gray-800">Category</h2>
    </div>
   <ProductsWrapper>
    {categories.map((val,id)=>(
        <Link to={`/categories/${val.id}`} key={id}>
        <CategoryCard  {...val} />
        </Link>
    ))}
   </ProductsWrapper>
   </>
  )
}