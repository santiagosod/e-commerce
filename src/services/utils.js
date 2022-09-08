import axios from "axios";

const URL = endpoint => `https://ecommerce-api-react.herokuapp.com/api/v1/${endpoint}`

export const getConfig = () => (
    {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
)

export const get = endpoint => new Promise((resolve, reject) => {
    axios.get(URL(endpoint))
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const remove = endpoint => new Promise((resolve, reject) => {
    axios.delete(URL(endpoint))
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const post = (endpoint, data) => new Promise((resolve, reject) => {
    axios.post(URL(endpoint), data)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const put = (endpoint, data) => new Promise((resolve, reject) => {
    axios.put(URL(endpoint), data)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const patch = (endpoint, data) => new Promise((resolve, reject) => {
    axios.patch(URL(endpoint), data)
    .then(res => resolve(res))
    .catch(err => reject(err))
})