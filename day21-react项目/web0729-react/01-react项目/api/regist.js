import axios from 'axios'
export function verifyPhone(phone) {
  return axios({
    url: '/regist/verify_phone',
    method: 'post',
    data: {
      phone,
    },
  })
}
export function verifyCode(phone, code) {
  return axios({
    url: '/regist/verify_code',
    method: 'post',
    data: {
      phone,
      code,
    },
  })
}
export function registe(phone, password) {
  return axios({
    url: '/regist/user',
    method: 'post',
    data: {
      phone,
      password,
    },
  })
}
