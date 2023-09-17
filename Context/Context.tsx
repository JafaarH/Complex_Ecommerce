import {Dispatch, createContext, useReducer} from "react"
import { StoreData } from "../StoreData"
import { Reducer, intialValue, productReducer, productValue } from "./Reducer"

type props = {
    children: React.ReactNode
}

type context = {
    addToCart:  (product: any) => void,
    removeFromCart: (product: {
        title: any;
    }) => void,
    products: never[],
    total: number,
    searchQuery: string,
    byRate: number,
    productDispatch: Dispatch<{
        type: any;
        payload: any;
    }>,
    sort: string
} 

export const Cart = createContext({} as context)
export const ShopProvider = ({children}: props) => {
const [state, dispatch] = useReducer(Reducer, intialValue)

const [productState, productDispatch] = useReducer(productReducer, productValue)

const addToCart = (product: any) => {
    const updatedCart = state.products
    updatedCart.push(product)

    totalPrice(updatedCart)

    dispatch({
        type: "add",
        payload: updatedCart 
    })
}

const removeFromCart = (product: { title: any }) => {
    const updatedCart = state.products.filter((currentProduct: { title: any })=> currentProduct.title !== product.title )

    totalPrice(updatedCart)

    dispatch({
        type: "remove",
        payload: updatedCart
    })
}

 
const totalPrice = (products: any[]) => {
    let total = 0;
    products.forEach((product: { price: number }) => total += product.price)

    dispatch({
        type: "total",
        payload: total
    })
}

const value = {
    addToCart,
    removeFromCart,
    products: state.products,
    total: state.total,
    byRate: productState.byRate,
    searchQuery: productState.searchQuery,
    productDispatch,
    sort: productState.sort
}

    return <Cart.Provider value={value}>{children}</Cart.Provider>
}