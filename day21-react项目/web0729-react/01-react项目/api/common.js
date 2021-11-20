// 这里存放了所有公共接口的方法
import axios from 'axios'
export function getCountryData() {
  return axios({
    url: '/common/countryData',
  })
}
