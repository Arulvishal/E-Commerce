
import { useParams } from 'react-router-dom'
import Product from '../../Data/product'
import ProductsWrapper from './ProductsWrapper'
import ProductCard from './Productsty'

export default function TrendProduct() {
    const {id} = useParams()
    const trendz = Product.filter((val,index)=>val.t_id == id )
    console.log(trendz);
    
  return (
    <ProductsWrapper>
    {trendz.map((val,id)=>(
        <ProductCard key={id} {...val} />
    ))}
   </ProductsWrapper>
  )
}