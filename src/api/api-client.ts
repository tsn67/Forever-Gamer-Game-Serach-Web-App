
import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6e56bafcb89347b1abcc6123ee5eb853'
    }
})

export default apiClient
