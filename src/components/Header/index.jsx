import Button from "../Button"
import logo from '../../burger.svg'
import './style.css'

const Header = () =>{
    return(
        <header>
            <figure>
                <img src={logo} alt='logo'/>
            </figure>
            <form className="pesquisa">
                <input className="pesquisa__input" type="text" placeholder="Digitar Pesquisa"/>
                <Button className={'pesquisa__button'}>Pesquisar</Button>
            </form>
        </header>
    )
}

export default Header