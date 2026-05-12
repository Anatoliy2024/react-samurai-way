import { useEffect, useState } from "react"

export function Counter() {
  const { count, inc } = useCounter(2)

  return <button onClick={inc}>{count}</button>
}

const useCounter = (startValue: number = 0) => {
  const [count, setCount] = useState(startValue)

  useEffect(() => {
    setInterval(() => {
      setCount(0)
    }, 3000)
  }, [])

  return { count, inc: () => setCount(count + 1) }
}
