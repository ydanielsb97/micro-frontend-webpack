import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/recursos-humanos">Recursos Humanos</Link>
            </li>
            <li>
                <Link to="/legal">Legal</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar