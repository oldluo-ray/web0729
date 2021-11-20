import { CHECK_ALL_TODO, CLEAR_ALL_DONE } from './constants'

function checkAllFn(checked) {
  return { type: CHECK_ALL_TODO, checked }
}
function clearAllDoneFn() {
  return { type: CLEAR_ALL_DONE }
}

export { checkAllFn, clearAllDoneFn }
