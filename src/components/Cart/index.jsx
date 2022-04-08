import CartProduct from '../CartProduct'
import CartTotal from '../CartTotal'
import './style.css'

const Cart = ({curentSale, setCurentSale}) =>{


    return (
        <section className="cart">
            <h1>Carrinho de Compras</h1>
            {curentSale.length < 1 ? ( 
            <ul className="cart__list">
                <li className='cart__empty'>
                    <p className='cart__p'>Sua sacola está vazia</p>
                    <span className='cart__span'>Adicione itens</span>
                </li>
            </ul>) 
            : (
            <>
            <ul className="cart__list">
                {curentSale.map(({id,name,category,price,img}) => <CartProduct setCurentSale={setCurentSale} curentSale={curentSale} key={id} id={id} name={name} category={category} price={price} img={img}/>)}
            </ul>
            <CartTotal curentSale={curentSale} setCurentSale={setCurentSale}/>
            </>
                )
            }
           
        </section>
    )
}

export default Cart