import axios from 'axios'

const api = axios.create({
  baseURL: 'https://register-users.herokuapp.com',
})

export default api;