
import { useParams } from 'react-router-dom'
import Product from '../../Data/product'
import ProductsWrapper from './ProductsWrapper'
import Trendsty from './Trendsty'

export default function TrendProduct() {
    const {id} = useParams()
    const trend = Product.filter((val,id)=>val.t_id == "id" )
    console.log(trend);
    
  return (
    <ProductsWrapper>
    {trend.map((val,id)=>(
        <Trendsty key={id} {...val} />
    ))}
   </ProductsWrapper>
  )
}