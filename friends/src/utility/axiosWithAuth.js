import axios from 'axios'

export const axiosWithAuth = axios.create({
    baseURL: "localhost:5000/api"
})