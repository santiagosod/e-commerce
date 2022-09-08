import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getConfig } from "../../services/utils";
import PurchasesCards from '../purchase/PurchasesCards';

const Purchase = () => {
  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])

  console.log(purchases);

  return (
    <div className="purchase__container">
      <h2 className='purchase__container-title'>My purchases</h2>

      <div className="purchase__cards-container">
        {
          purchases?.map(purchase => (
            <PurchasesCards
              key={purchase.cartId}
              purchase={purchase}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Purchase