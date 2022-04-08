import Button from "../Button"
import './style.css'


const Product = ({id,name,category,price,img}) =>{
    return(
        <li id={id} className='product'>
            <figure>
                <img src={img} alt={name}/>
            </figure>
            <div>
                <h1>{name}</h1>
                <span>{category}</span>
                <p>R$ {price.toFixed(2)}</p>
                <Button>{'Adicionar'}</Button>
            </div>
        </li>
    )
}

export default Product