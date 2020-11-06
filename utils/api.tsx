/* eslint-disable no-undef */

import axios from 'axios'

const createInstance = () => {
  return axios.create({
    baseURL: 'http://localhost:3000/api'
  })
}

const handleResponse = (res: any) =>
  !res.data.error ? Promise.resolve(res) : Promise.reject(new Error(res))

const catchError = (err:any) => Promise.reject(err)

export default {
  get: (path: any, headers = {}) =>
    createInstance(headers).get(path).then(handleResponse).catch(catchError),
  post: (path: any, body = {}, headers = {}) =>
    createInstance(headers)
      .request({
        url: path,
        method: 'POST',
        data: body
      })
      .then(handleResponse)
      .catch(catchError),
  put: (path: any, body = {}, headers = {}) =>
    createInstance(headers)
      .request({
        url: path,
        method: 'PUT',
        data: body
      })
      .then(handleResponse)
      .catch(catchError),
  delete: (path: any, body = {}, headers = {}) =>
    createInstance(headers)
      .request({
        url: path,
        method: 'DELETE',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
}
