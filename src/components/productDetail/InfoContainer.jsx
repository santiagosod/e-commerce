import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCartAction } from '../../store/slices/cart.slice'
import { setTotalPrice } from '../../store/slices/totalCart.slice'
import '../../styles/InfoContainer.css'

const InfoContainer = ({ productInfo }) => {
  const [counter, setCounter] = useState(1)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handlePlusBtn = () => {
    setCounter(counter + 1)
  }

  const handleMinusBtn = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }
  
  console.log(productInfo);

  const addToCart = () => {
    if(localStorage.getItem('token')){
        dispatch(addToCartAction(productInfo.id, counter))
        dispatch(setTotalPrice(counter, productInfo?.price))
    } else {
        navigate('/login')
    }
  }

  return (
    <section className='info'>
      <h2 className='info__title'>{productInfo?.title}</h2>

      <p className='info__descr'>{productInfo?.description}</p>

      <section className='info__price'>
        <div className="info__price-container">
          <label className='info__price-label'>Price</label>
          <span className='info__price-value'>$ {productInfo?.price}</span>
        </div>

        <div className="info__pice-btns">
          <span className='info__price-title'>Quantity</span>

          <div className="info__price-btns-container">
            <button onClick={handleMinusBtn} className='info__price-minus-btn'>
              <i className="fa-solid fa-minus"></i>
            </button>
            <span className='info__price-quantity'>
              {counter}
            </span>
            <button onClick={handlePlusBtn} className='info__price-plus-btn'>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </section>

      <button onClick={addToCart} className='info__add-btn'>
        Add to cart <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </section>
  )
}

export default InfoContainer