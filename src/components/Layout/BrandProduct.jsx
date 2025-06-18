import React from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../Data/product'
import ProductsWrapper from './ProductsWrapper'
import ProductCard from './Productsty'

export default function BrandProduct() {
    const {id} = useParams()
    const data = Product.filter((val,index)=>val.brand_id ==  id )
    console.log(data);
    
  return (
    <ProductsWrapper>
    {data.map((val,id)=>(
        <ProductCard key={id} {...val} />
    ))}
   </ProductsWrapper>
  )
}