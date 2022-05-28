import React, { useState } from 'react'

const Counter1 = () => {
    const [count,setCount]=React.useState(0)
  return (
    <div>
        <button disabled={count<1} onClick={()=>setCount(count-1)}>Prev</button>
        Counter1:{count}
        <button onClick={()=>setCount(count+1)}>ADD</button>
    </div>
  )
}

export default Counter1