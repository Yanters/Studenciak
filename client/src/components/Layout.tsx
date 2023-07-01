import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar />
      <div className='w-full bg-primary-100 h-full'>{children}</div>
    </div>
  )
}

export default Layout
