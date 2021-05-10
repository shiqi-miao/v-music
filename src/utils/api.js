import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
import {getToken} from '@/utils/seedling'
import store from '../store'
import Vue from 'vue'

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 60000,
  withCredentials: false
})

service.interceptors.request.use(config => {
  config.headers.operatorId = store.getters.operatorId
  config.headers.stockType = store.getters.stockType
  config.headers.thumbType = store.getters.thumbType
  config.headers.token = sessionStorage.getItem('TOKEN')
  return config
}, error => {
  console.error(error)
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.returnCode == '1000') {
      return res;
    }
    if (res.returnCode == '10090' || res.returnCode == '10091' || res.returnCode == '10092') {
      return res;
    }
    if (res.returnCode == '99813' || res.returnCode == '99814') {
      //bind
      return res;
    }
    if (res.returnCode == '91165') {
      //active
      return res;
    }
    if (res.returnCode == '100') {
      return res.returnData;
    } else if (res.returnCode == "20011") {
      Message({
        showClose: true,
        message: res.returnMsg,
        type: 'error',
        duration: 500,
        onClose: () => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()
          })
        }
      });
      return Promise.reject("未登录")
    } else {
      Message({
        message: res.returnMsg,
        type: 'warning',
        duration: 3 * 1000
      })
      return Promise.reject(res)
    }
  },
  error => {
    console.error('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)
export default service

