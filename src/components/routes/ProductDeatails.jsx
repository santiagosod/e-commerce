import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../../services/utils'
import Gallery from '../productDetail/Gallery'
import InfoContainer from '../productDetail/InfoContainer'
import SimilarProducts from '../productDetail/SimilarProducts'

const ProductDeatails = () => {
  const [productInfo, setProductInfo] = useState()

  const { id } = useParams()

  useEffect(() => {
    get(`products/${id}`)
    .then(res => setProductInfo(res.data.data.product))
    .catch(err => console.log(err))
  },[ id ])

  return (
    <div className='productDetails'>
      <div className="productDetails__container">
      <div className="gallery__container">
        <Gallery images={productInfo?.productImgs}/>
      </div>

      <div className="desc__info-container">
        <InfoContainer productInfo={productInfo}/>
      </div>
      </div>

      <div className="productDetails__cart-container">
        <SimilarProducts productInfo={productInfo}/>
      </div>
    </div>
  )
}

export default ProductDeatails