import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import SearchBox from '../home/SearchBox'
import Filter from '../home/Filter'
import '../../styles/Home.css'


const Home = () => {
  const [hideFilter, setHideFilter] = useState(true)

  const handleShowFilter = () => {
    if(hideFilter){
      setHideFilter(false)
    } else {
      setHideFilter(true)
    }
  }

  const products = useSelector(state => state.products)

  return (
    <div className="home">
      <div className={hideFilter ? 'filter__container hide-filter' : 'filter__container'}>
        <Filter setHideFilter={setHideFilter}/>
      </div>

      <div className="search__box-container">
        <SearchBox />
      </div>

      <div className="filter__btn-container">
        <button onClick={handleShowFilter} className='filter__btn'><i className="fa-solid fa-filter icon__filter"></i>Filters</button>
      </div>

      <div className="home__container__card">
        {
          products?.map(product => (
            <CardHome
              key={product.id}
              product={product} 
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home