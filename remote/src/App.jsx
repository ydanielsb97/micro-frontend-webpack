import './App.css'

import Button from './Button'
import useCount from './store'

function App() {
  const [state] = useCount();

  return (
    <>
      <h1>Remote Application</h1>
      <Button />
      {state}
    </>
  )
}

export default App
