
import axios from 'axios'

export const Request = (query) => {
    return axios.get(`/product?q=${query}`)
}