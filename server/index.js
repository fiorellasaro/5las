var axios = require('axios');
var localStorage = require('localStorage');
let api = axios.create({
  method: 'get',
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'Authorization': localStorage.getItem('Auth')
  },
  timeout: 40000,
  withCredentials: false,
  responseType: 'json',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `maxContentLength` defines the max size of the http response content allowed
  maxContentLength: 2000000,

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 3, // default
});

export const signup = async (userInfo) => {
  try {
    const res = await api.post(`http://5las.renatocenteno.com/auth/signup`, userInfo)
    Object.assign(api.defaults, { headers: { Authorization: res.data.id } })
    return res
  } catch (error) {
    return error
  }
}

export const signin = async (userCredentials) => {
  try {
    const res = await api.post(`http://5las.renatocenteno.com/auth/signin`, userCredentials)
    Object.assign(api.defaults, { headers: { Authorization: res.data.id } })
    return res
  } catch (error) {
    return error
  }
}

export default api

