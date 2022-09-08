import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import ProductDetails from './components/routes/ProductDeatails'
import Login from './components/routes/Login'
import Purchase from './components/routes/Purchase'
import Header from './components/shared/Header'
import { useEffect, useState } from 'react'
import Cart from './components/shared/Cart'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/product.slice'



function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  },[])

  const handleClick = () => {
    if(darkMode){
      setDarkMode(false)
    } else {
      setDarkMode(true)
    }
  }

  return (
    <div className={darkMode ? 'app dark__mode' : 'app'}>
      <Header setShowCart={setShowCart} showCart={showCart}/>

      <Cart showCart={showCart} setShowCart={setShowCart}/>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />
        
        <Route path='/product/:id' element={<ProductDetails />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/purchase' element={<Purchase />} />
        </Route>
      </Routes>


      <button onClick={handleClick} className='btn__dark-mode'>{
        darkMode ? <i className="fa-regular fa-sun"></i> : <i className="fa-regular fa-moon"></i>
      }</button>
    </div>
  )
}

export default App
