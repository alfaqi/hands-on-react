import { useEffect } from "react";
import { useState } from "react"
const pageTitle = document.title;
export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    count && (document.title = `${pageTitle} - ${count}`)
  })
  return (
    <button onClick={() => { setCount(count + 1) }}>
      {count
        ? ` Supported ${count} times`
        : `Click to support`
      }
    </button>
  )
}