import Button from "../Button"
import './style.css'

const CartTotal = ({curentSale, setCurentSale}) =>{

    return(
        <>
        <div className='total'>
            <div className='total__price'>
                <p>Total</p>
                <span>R$ {curentSale.reduce((acc, product)=> acc+ product.price ,0).toFixed(2)}</span>
            </div>
            <Button handleClick={()=>{setCurentSale([])}} className={'total__button'}>Remover todos</Button>
        </div>
        </>
    )
}

export default CartTotal