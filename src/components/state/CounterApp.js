import React, { useState } from 'react'

function CounterApp() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <div>
            Counter
        </div>
        <h2>Count: {count}</h2>
        <button onClick={this.increment}>Increment</button>
    </div>
  )
}

export default CounterApp