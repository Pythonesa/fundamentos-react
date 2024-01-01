import { useState } from "react"

export default function ButtonState () {
    const [count,setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <button onClick={handleClick}>N² de clicks: {count}</button>
    )
}