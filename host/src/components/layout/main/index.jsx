import React from 'react'
import { Fragment } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MainLayout = ({ children }) => {
  return (
    <Fragment>
        <Navbar />
        <main>
            <Sidebar />

            <div>
                {children}
            </div>
        </main>
    </Fragment>
  )
}

export default MainLayout