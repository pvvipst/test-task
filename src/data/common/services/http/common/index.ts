import { HttpService } from '@data/common/services/http/service'

export default new HttpService({
  baseURL: process.env.REACT_APP_BASE_DOMAIN,
  headers: {
    'Content-Type': 'application/json'
  }
})
