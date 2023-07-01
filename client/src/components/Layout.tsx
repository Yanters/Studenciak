import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-full bg-primary-100 min-h-screen'>{children}</div>
    </div>
  )
}

export default Layout
