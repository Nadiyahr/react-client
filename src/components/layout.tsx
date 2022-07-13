import React from 'react'
import NavBar from './navbar'

type Layout = {
  children: React.ReactNode,
}

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="container">{children}</div>
    </div>
  )
}

export default Layout
