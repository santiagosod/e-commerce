import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getConfig } from '../../services/utils'
import { getCartInfo } from '../../store/slices/cart.slice'
import { setTotalDeleteThunk } from '../../store/slices/totalCart.slice'
import '../../styles/ProductCartInfo.css'


const ProductCartInfo = ({ product }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(res => {
        dispatch(getCartInfo())
        dispatch(setTotalDeleteThunk(product.productsInCart.quantity, product.price))
      })
      .catch(err => console.log(err))
  }

  console.log(product);

  useEffect(() => {
    dispatch(getCartInfo)
  }, [])

  return (
    <article className='cart__info'>
      <header className='cart__info-header'>
        <h4 className='cart__category'>{product.brand}</h4>
        <h3 className='cart__name'>{product.title}</h3>
      </header>
      <div className="cart__info-btn">
        <i onClick={handleDelete} className="fa-regular fa-trash-can"></i>
        <span className='cart__quantity'>{product.productsInCart.quantity}</span>
      </div>
      <div className='cart__info-total'>
        <span className='cart__total-label'>Total:</span>
        <p className='cart__total-value'>$ {Number(product.price) * product.productsInCart.quantity}</p>
      </div>
    </article>
  )
}

export default ProductCartInfo