import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCartAction } from '../../store/slices/cart.slice'
import { setTotalPrice } from '../../store/slices/totalCart.slice'
import '../../styles/CardHome.css'

const CardHome = ({product}) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const addToCart = () => {
        if(localStorage.getItem('token')){
            dispatch(addToCartAction(product.id, 1))
            dispatch(setTotalPrice(1, product.price))
        } else {
            navigate('/login')
        }
    }

    const handleClick = () => {
        navigate(`/product/${product.id}`)
        window.scrollTo(0, 0)
    } 


  return (
    <article className='card-home'>
        <header onClick={handleClick} className='card-home__header'>
            <img className='card-home__img img__1' src={product.productImgs[0]} alt="" />
            <img className='card-home__img img__2' src={product.productImgs[1]} alt="" />
        </header>

        <div className="card-home__body">
            <h3 className='card-home__name'>{product.title}</h3>

            <section className='card-home__price'>
                <h4 className='card-home__price-label'>Price</h4>

                <span className='card-home__price-value'>$ {product.price}</span>
            </section>

            <button className='card-home__btn' onClick={addToCart}>
                <i className="fa-solid fa-cart-plus"></i>
            </button>
        </div>
    </article>
  )
}

export default CardHome