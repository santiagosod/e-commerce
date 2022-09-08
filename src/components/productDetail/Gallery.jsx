import React, { useState } from 'react'
import '../../styles/Gallery.css'

const Gallery = ({ images }) => {

    const [currentImage, setCurrentImage] = useState(1)

    const percentage = 100 / images?.length

    const listStyles = {
        width: `${100 * images?.length}%`,
        transform: `translateX(-${(currentImage - 1) * percentage}%)`
    }

    return (
        <article className='gallery'>
            <div className="gallery__btns">
            <button className='gallery__btn-back' onClick={() => setCurrentImage(currentImage - 1)} disabled={currentImage <= 1}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            <button className='gallery__btn-forward' onClick={() => setCurrentImage(currentImage + 1)} disabled={currentImage >= images?.length}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            </div>

            <ul className='gallery__list' style={listStyles}>
                {
                    images?.map(image => (
                        <li className='gallery__list-img' key={image}>
                            <img  src={image} alt="" />
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default Gallery