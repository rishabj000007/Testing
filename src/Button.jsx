import React, { useState } from 'react'

export default function Button() {
    const [message, setMessage] = useState(null)
    const handleClick = () => {
        setMessage("rishab")
    }
  return (
    <>
      <button onClick={handleClick}>click me</button>
      <h1>{message}</h1>
    </>
  )
}
