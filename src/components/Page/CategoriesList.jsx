import { Link } from 'react-router-dom'
import categories from '../../Data/category'
import CategoryCard from '../Layout/Categorysty'
import ProductsWrapper from '../Layout/ProductsWrapper'

export default function CategoriesList() {
  return (
   <ProductsWrapper>
    {categories.map((val,id)=>(
        <Link to={`${val.id}`} key={id}>
        <CategoryCard  {...val} />
        </Link>
    ))}
   </ProductsWrapper>
  )
}