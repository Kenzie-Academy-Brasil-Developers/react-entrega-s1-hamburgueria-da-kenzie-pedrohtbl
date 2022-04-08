import './style.css'

const CartProduct = ({id,name,category,price,img,setCurentSale,curentSale}) =>{

    const deleteProduct = (event) =>{
        setCurentSale(curentSale.filter(({id})=> Number(id) !== Number(event.target.id)))
    }

    return (
        <li className='cart__product'>
            <figure>
                <img src={img} alt={name}/>
            </figure>
            <div>
                <h2>{name}</h2>
                <p>{category}</p>
            </div>
            <button id={id} onClick={deleteProduct}>Remover</button>
        </li>
    )
}

export default CartProduct