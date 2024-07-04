import React, { useState, useEffect, Fragment } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    setTimeout(() => {
      setUser({ firstName: "Yeison", lastName: "Serrano"})
    }, 1500);
  }, [])
  
  return (
    <Fragment>
        <Navbar />
        <main>
            <Sidebar />
    
            <div>
              <Outlet context={[ user ]} />
            </div>
        </main>
    </Fragment>
  )
}

export default MainLayout