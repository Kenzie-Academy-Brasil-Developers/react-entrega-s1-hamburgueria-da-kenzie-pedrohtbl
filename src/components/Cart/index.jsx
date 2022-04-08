import Button from '../Button'
import './style.css'

const Cart = () =>{
    return (
        <section className="cart">
            <h1>Carrinho de Compras</h1>
            <ul className="cart__list">
            
            </ul>
            <div className='total'>
                    <div className='total__price'>
                        <p>Total</p>
                        <span>R$ </span>
                    </div>
                    <Button className={'total__button'}>Remover todos</Button>
                </div>
        </section>
    )
}

export default Cart