import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { get } from '../../services/utils'
import { filterProductsCategory } from '../../store/slices/product.slice'
import '../../styles/Filter.css'

const Filter = ({setHideFilter}) => {
  const [categories, setCategories] = useState()
  const [openBtn, setOpenBtn] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    get('products/categories')
    .then(res => setCategories(res.data.data))
  },[])

  const handleFilter = (id) => {
    dispatch(filterProductsCategory(id))
    setHideFilter(true)
  }

  const handleHideFilter = () => {
    setHideFilter(true)
  }

  const handleOpenBtn = () => {
    if(openBtn){
      setOpenBtn(false)
    } else {
      setOpenBtn(true)
    }
  }

  return (
    <article className='filter'>
        <button onClick={handleHideFilter} className='filter__close-btn'><i className="fa-solid fa-xmark"></i></button>

        <h2 className='filter__title'>Filters</h2>

        <div className={openBtn ? 'filter__category-container' : 'filter__category-container closed'}>
        <section className='filter__category'>
          <h2 className='filter__subtitle'>Category</h2> 
          <button onClick={handleOpenBtn} className={openBtn ? 'filter__open-btn' : 'filter__open-btn close'}><i className="fa-solid fa-chevron-down"></i></button>
        </section>

        <hr className='filter__hr' />

        <ul className='filter__list'>
          {
            categories?.categories.map(category => (
              <li className='filter__option' key={category.id}>
                <button onClick={() => handleFilter(category.id)} className='filter__option-btn'>
                  {category.name}
                </button>
              </li>
            ))
          }
        </ul>
        </div>

    </article>
  )
}

export default Filter