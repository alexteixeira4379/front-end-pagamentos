import services from "./services";
import api from './api'

const setBearerToken = token => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default services;

export { api, setBearerToken }
