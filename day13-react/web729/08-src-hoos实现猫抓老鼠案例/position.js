import { useState, useEffect } from 'react'
// 如何判断是否是自定义hook. 以use开头就是自定义hook
export default function useFn() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  function handle(e) {
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    window.addEventListener('mousemove', handle)
    return () => {
      window.removeEventListener('mousemove', handle)
    }
  }, [])

  return {
    x,
    y,
  }
}
