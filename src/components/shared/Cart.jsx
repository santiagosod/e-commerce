import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConfig } from '../../services/utils'
import { getCartInfo } from '../../store/slices/cart.slice'
import ProductCartInfo from '../cart/ProductCartInfo'
import { setTotalCheckout } from '../../store/slices/totalCart.slice'
import '../../styles/Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = ({ showCart, setShowCart }) => {

  const dispatch = useDispatch()

  const cartProducts = useSelector(state => state.cart)

  const totalCart = useSelector(state => state.totalPrice)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCartInfo())
  }, [])

  const handleCheckout = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, obj, getConfig())
      .then(res => {
        dispatch(setTotalCheckout())
        dispatch(getCartInfo())
        setShowCart(false)
        navigate('/purchase')
      })
      .catch(err => console.log(err))
  }

  return (
    <article className={showCart ? 'cart' : 'cart hide-cart'}>
      <div className="scroll__bar">
        <h2 className='cart__title'>Carrito de compras</h2>

        <div className="product__cart-container">
          {cartProducts?.map(product => {
            return <ProductCartInfo
              key={product.id}
              product={product}
            />
          }
          )}
        </div>
      </div>

      <footer className='cart__fotter'>
        <div className="cart__total">
          <span className='cart__total-global-label'>Total:</span>
          <p className='cart__total-global-value'>$ {totalCart}</p>
        </div>
        <button onClick={handleCheckout} className='cart__btn'>Checkout</button>
      </footer>
    </article>
  )
}

export default Cart