import React from 'react'
import useCount from './store';


const Button = () => {
    const [state, setState] = useCount();

  return (
    <div>
        <button
            className='shared-btn'
            onClick={() => setState((s) => s + 1)}
        >
            Click me: {state}
        </button>
    </div>
  )
}

export default Button