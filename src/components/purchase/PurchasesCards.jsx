import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/PurchaseCard.css'

const PurchasesCards = ({ purchase }) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const date = new Date(purchase.createdAt).toLocaleDateString('en-us', options)

    const navigate = useNavigate()

    return (
        <div className='purchase'>
            <header className='purchase__header'>
                <h3 className='purchase__header-title'>
                    {date}
                </h3>
            </header>

            <main className='purchase__main'>
                <ul className='purchase__list'>
                    {
                        purchase.cart.products.map(productItem => (
                            <li
                                key={productItem.id}
                                className='product__item'
                            >
                                <div className="item__name">
                                    {productItem.title}
                                </div>

                                <div className="item__quantity">
                                    {productItem.productsInCart.quantity}
                                </div>

                                <div className="item__price">
                                    $ {productItem.productsInCart.quantity * Number(productItem.price)}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </main>
        </div>
    )
}

export default PurchasesCards