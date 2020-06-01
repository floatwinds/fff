import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://127.168.3.30:3000',
  timeout: 3000
})

export default {
  get (path = '', params = {}) {
    return instance.get(path, { params: params })
  },
  post (path = '', data = {}) {
    return instance.post(path, data)
  }
}
