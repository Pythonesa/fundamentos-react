import { useState } from "react"

export default function ButtonState () {
    let [count,setCount] = useState(0)
    const handleClick = () => {
        setCount(++count)
    }
    return (
        <button onClick={handleClick}>N² de clicks: {count}</button>
    )
}