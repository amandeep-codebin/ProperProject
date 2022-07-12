import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
import { AddProductType, CartType, ProductType } from '../models';

export const BASE_URL = "https://f795-103-97-240-85.in.ngrok.io"
// export const BASE_URL = "http://10.0.2.2:3000"

const fetchProducts = () => {
    const url = `${BASE_URL}/Products`;
    console.log("urllll", url)
    return axios.get(url)
}

const SearchAllProducts = (term: string) => {
    const url = `${BASE_URL}/Products?title_like=${term}`
    return axios.get(url)
}

const fetchSingleProduct = (id: string) => {
    const url = `${BASE_URL}/Products/${id}`;
    return axios.get(url)
}

const cartProducts = (UserId: string) => {
    const url = `${BASE_URL}/Carts?UserId_like=${UserId}`
    console.log("Cart url", url)
    return axios.get(url)
}

const AddProducts = (
    {
        title,
        desc,
        price,
        discount,
        image,
    }: AddProductType
) => {
    const url = `${BASE_URL}/Products`;
    const DatatoAdd = {
        id: uuidv4(),
        title,
        desc: "Best product ever",
        price,
        discount: 0,
        image: "https://via.placeholder.com/350,"

    }
    return axios.post(url, { data: DatatoAdd })
}
const AddProductsToCart = async (
    id: string,
    ProdId: string,
    UserId: string,
    price: number
) => {
    console.log('Cart id', id)
    const url = `${BASE_URL}/Carts/${id}`;
    console.log("url add to cart", url)
    const oldCart = await cartProducts('User2');
    const newCart = oldCart.data[0];
    console.log("new data after ", newCart)
    console.log("old cart", oldCart.data)
    let CartData: CartType = {
        ...newCart, products: [ ...newCart.products,{ ProdId: ProdId, price: price} ],
    }
    console.log("final data: ", CartData)
    return axios.put(url, { data: CartData })
}
export { fetchSingleProduct, fetchProducts, AddProducts, SearchAllProducts, cartProducts, AddProductsToCart };