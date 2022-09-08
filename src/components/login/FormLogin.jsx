import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import '../../styles/FormLogin.css'
import { post } from '../../services/utils'

const defaultValue = {
    email: '',
    password: ''
}

const FormLogin = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        post('users/login', data)
        .then(res => {
            localStorage.setItem('token', res.data.data.token)
            localStorage.setItem('userName', `${res.data.data.user.firstName} ${res.data.data.user.lastName}`)
            navigate('/login')
        })
        .catch(err => {
            console.log(err)
            window.alert('Password or email incorrect')
        })
    }

    const logOut = () => {
        localStorage.setItem('token', '')
        localStorage.setItem('userName', '')
        navigate('/login')
    }
    
 if(localStorage.getItem('token')){
    return(
        <div className="log__out-container">
            <i className="fa-solid fa-user log__out-icon"></i>

            <h2 className='log__out-name'>{localStorage.getItem('userName')}</h2>

            <button className='log__out-btn' onClick={logOut}>Log out</button>
        </div>
    )
 } else {
     return (
       <form onSubmit={handleSubmit(submit)} className='login__form'>
           <h2 className='login__form-title'>Welcome! Enter your email and password to continue</h2>
   
           <div className="login__form-email">
               <label className='login__form-label' htmlFor="email">Email</label>
               <input {...register('email')} className='login__form-input' type="text" id='email' />
           </div>
   
           <div className="login__form-password">
               <label className='login__form-label' htmlFor="password">Password</label>
               <input {...register('password')} className='login__form-input' type="password" id='password' />
           </div>
   
           <button className='login__form-btn'>Login</button>
   
           <span className='login__form-span'>Don't have an account? <NavLink className='login__form-nav-link' to='/signup'>Sign up</NavLink></span>
       </form>
     )
 }
}

export default FormLogin