import { CHANGE_MSG } from './constants'
// 修改msg,直接修改
function setMsg(msg) {
  return { type: CHANGE_MSG, msg }
}

export { setMsg }
