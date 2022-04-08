import Button from "../Button"
import logo from '../../burger.svg'
import './style.css'
import { useState } from "react"

const Header = ({products, setFilteredProducts, filteredProducts}) =>{

    const filterProducts = (event) =>{
        event.preventDefault()

        setFilteredProducts(products.filter(({name,category})=> 
        name.toLowerCase().includes(event.target.children[0].value.trim().toLowerCase()) || 
        category.toLowerCase().includes(event.target.children[0].value.trim().toLowerCase())
        ))

        console.log(filteredProducts)
        filteredProducts.length === 0 && console.log('produto n encontrado') 

        event.target.children[0].value = ''
    }

    
    return(
        <>
            <header>
                <figure>
                    <img src={logo} alt='logo'/>
                </figure>
                <form className="pesquisa" onSubmit={filterProducts}>
                    <input className="pesquisa__input" name='pesquisa' type="text" placeholder="Digitar Pesquisa"/>
                    <Button className={'pesquisa__button'}>Pesquisar</Button>
                </form>
            </header>     
        </>
    )
}

export default Header