import Button from "../Button"
import './style.css'


const Product = ({id,name,category,price,img,curentSale, setCurentSale, products}) =>{

    const handleClick = (event) =>{
        const itemRepetido = curentSale.find(({id}) => Number(event.target.id) === Number(id))
       !itemRepetido ? setCurentSale([...curentSale , products.find(({id}) => Number(id) === Number(event.target.id))]) 
       
       : console.log('item ja esta no carrinho')
    }

    return(
        <li className='product'>
            <figure>
                <img src={img} alt={name}/>
            </figure>
            <div>
                <h1>{name}</h1>
                <span>{category}</span>
                <p>R$ {price.toFixed(2)}</p>
                <Button id={id} handleClick={handleClick}>{'Adicionar'}</Button>
            </div>
        </li>
    )
}

export default Product