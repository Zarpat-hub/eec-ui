import axios from 'axios'

const client = axios.create({
  // baseURL: 'http://localhost:5200/api/',
  baseURL: 'https://eec-api.herokuapp.com/api/',
})

export default client
