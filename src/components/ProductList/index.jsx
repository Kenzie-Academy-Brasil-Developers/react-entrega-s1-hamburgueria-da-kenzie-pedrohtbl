import axios from "axios"
import { useState, useEffect } from "react"
import Product from "../Product"
import './style.css'


const ProductList = () =>{
    const [products, setProducts] = useState([])

    useEffect(() =>{
        const  getProducts = async () =>{
            const response = await axios.get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
            setProducts(response.data)
        }
        getProducts()
    },[])
    
    return (
        <ul className="productList">
            {products.map(({id,name,category,price,img})=> <Product key={id} id={id} name={name} category={category} price={price} img={img}/>)}
        </ul>
    )
}

export default ProductList