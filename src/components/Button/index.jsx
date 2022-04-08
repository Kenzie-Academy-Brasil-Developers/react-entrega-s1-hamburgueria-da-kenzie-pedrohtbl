import './style.css'

const Button = ({children, className='', id, handleClick}) =>{

    return (
        <>
         {className === 'pesquisa__button' ?
             (
             <button type='submit'  id={id} className={`button ${className}`}>{children}</button>
        
             )
             
            :(<button onClick={handleClick}  id={id} className={`button ${className}`}>{children}</button>)
        }
        </>
    )
}

export default Button