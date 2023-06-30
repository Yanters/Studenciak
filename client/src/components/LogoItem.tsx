import React from 'react'
import Link from 'next/link'

const LogoItem = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <Link
      className='w-full h-auto flex flex-row items-center justify-center pt-5 pb-3'
      href='/'
    >
      <div className='flex flex-row items-center space-x-3'>
        <div className='w-12 h-12'>{icon}</div>
        <div className='text-3xl font-bold-500'>{text}</div>
      </div>
    </Link>
  )
}

export default LogoItem
