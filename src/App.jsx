import Home from "./components/Page/Home";
import Navi from "./components/Navbar/Navi";
import { Route, Router, Routes } from "react-router-dom";
import CategoriesList from "./components/Page/CategoriesList";
import BrandsList from "./components/Page/BrandsList";
import ProductsList from "./components/Page/ProductsList";
import CategoryProduct from "./components/Layout/CategoryProduct";
import BrandProduct from "./components/Layout/BrandProduct";
import  {ContextProvider}  from "./components/Layout/Context";
import Dialog from "./components/Layout/dialog";

export default function App() {
    return (
        <>
         <ContextProvider>
            <Dialog/>
            
            <Routes>
                
                <Route path="/" element={<Navi />}>
                    <Route index element={<Home />} />
                    <Route path='categories' element={<CategoriesList />} />
                    <Route path='brands' element={<BrandsList />} />
                    <Route path='products' element={<ProductsList />} />
                    <Route path='categories/:id' element={<CategoryProduct />} />
                    <Route path='brands/:id' element={<BrandProduct />} />
                     
                    </Route>
            </Routes>
            </ContextProvider>
        </>
    )
}