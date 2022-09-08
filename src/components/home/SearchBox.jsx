import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProductsName } from '../../store/slices/product.slice'
import '../../styles/SearchBox.css'

const SearchBox = () => {
    const [search, setSearch] = useState()

    const dispatch = useDispatch()

    const handleSearch = e => {
        e.preventDefault()

        dispatch(filterProductsName(search))
        setSearch('')
    }

    return (
        <form className='search' onSubmit={handleSearch}>
            <input
                type="text"
                placeholder='What are you looking for'
                value={search}
                onChange={e => setSearch(e.target.value)}
                className='search__input'
            />

            <button className='seacrch__btn'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    )
}

export default SearchBox