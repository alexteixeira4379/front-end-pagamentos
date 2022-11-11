import axios from "axios";
import store from '@/store'

const isDevelopment = process.env.NODE_ENV === 'development',
    /**
     * base domain from api host
     * @type {string}
     */
    BASE_HOST       = isDevelopment ? 'https://someurl.br' : 'https://someurl.br',

    /**
     * base url from default
     * @type {string}
     */
    baseURL         =  BASE_HOST

/**
 * create api resource
 *
 * @type {AxiosInstance}
 */
const api = axios.create({
    baseURL: baseURL,
})

api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response.data;
}, function (error) {

    if(error.response.status === 401){
        store.dispatch('auth/signOutAction')
            .then( () => window.location.reload() )
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response.data);
});

export { baseURL }

export default api