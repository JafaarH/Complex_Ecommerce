import { StoreData } from "../StoreData";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import "./style.css"
import {useContext} from "react"
import {Cart} from "../Context/Context"


const HomePage = () => {
    const {sort, byRate, searchQuery} = useContext(Cart)

    const transformedProduct = () => {
        let sortedProduct = StoreData;
        if(sort) {
            sortedProduct = sortedProduct.sort((a,b) => (
                sort === "lowToHigh" ? a.price-b.price : b.price-a.price 
            ))
        }
        if (byRate) {
            sortedProduct = sortedProduct.filter((prod) => (
                prod.rate >= byRate
            ))
        }
        if (searchQuery) {
            sortedProduct = sortedProduct.filter((prod) => (
                prod.title.toLowerCase().includes(searchQuery)
            ))
        }
        return sortedProduct;
    }

    return (
        <div className="home">
            <Filter />
            <div className="productContainer">
                {transformedProduct().map((prod, i) => (
                    <SingleProduct 
                    key ={i}
                    prod={prod}
                    />
                ))}
            </div>
        </div>
    )
}
export default HomePage;