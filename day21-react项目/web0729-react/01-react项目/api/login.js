import axios from 'axios'
export function sendCode(phone) {
  return axios({
    url: '/login/digits',
    method: 'post',
    data: {
      phone,
    },
  })
}
