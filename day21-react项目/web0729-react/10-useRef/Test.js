import { useRef } from 'react'
export default function Test() {
  const inputEl = useRef() // 传入的null表示inputEl.current的初始值
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    console.log(inputEl)
    inputEl.current.focus()
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}
