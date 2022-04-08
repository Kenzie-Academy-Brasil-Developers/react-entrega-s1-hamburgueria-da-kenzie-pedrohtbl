
import Product from "../Product"
import './style.css'


const ProductList = ({products, curentSale, setCurentSale}) =>{

    return (
        <ul className="productList">
            {products.map(({id,name,category,price,img})=> <Product 
                    key={id}
                    curentSale={curentSale} 
                    setCurentSale={setCurentSale}
                    products={products}
                    id={id} 
                    name={name}
                    category={category} 
                    price={price} 
                    img={img}
                    />
                )
            }
        </ul>
    )
}

export default ProductList