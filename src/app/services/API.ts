import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:5200/api/',
})

export default client
