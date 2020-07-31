const axios = require('axios')

const api = axios.create({
    baseURL: 'https://googlenews-api.herokuapp.com/'
})

export default api;