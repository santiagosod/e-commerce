import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../../styles/Header.css'

const Header = ({ setShowCart, showCart }) => {

    const navigate = useNavigate()

    const handleCart = () => {
        if (showCart && localStorage.getItem('token')) {
            setShowCart(false)
        } else if (localStorage.getItem('token')) {
            setShowCart(true)
        } else navigate('/login')
    }

    return (
        <header className='header'>
            <NavLink to='/'>
                <h1 className='header__logo'>e-commerce</h1>
            </NavLink>

            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className="header__item">
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'header__nav-icon'} to='/login'>
                            <i className="fa-solid fa-user"></i>
                        </NavLink>
                    </li>

                    <li className="header__item">
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'header__nav-icon'} to='/purchase'>
                            <i className="fa-solid fa-box"></i>
                        </NavLink>
                    </li>

                    <li onClick={handleCart} className="header__item">
                        <i className="fa-solid fa-cart-shopping header__nav-icon"></i>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header